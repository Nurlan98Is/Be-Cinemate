import { Schema, model, Document, Model, Types, } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    nickName: string;
    password: string;
    phoneNumber: string;
    isAdmin?: boolean;  
    friendRequestsSent: Types.ObjectId[];
    friendRequestsReceived: Types.ObjectId[];
    friendsList: Types.ObjectId[];
    favoriteSeries: Types.ObjectId[];
    favoriteMovies: Types.ObjectId[];                    
    }
  

  interface IUserMethods {
    generateToken(): string;
  }

  type UserDocument = Document<unknown, {}, IUser> & 
  IUser & 
  IUserMethods & {
    _id: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

const userSchema = new Schema<IUser, Model<IUser, {}, IUserMethods>, IUserMethods>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phoneNumber: {
        type: String,
        required: true
    },
    friendRequestsSent: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    friendRequestsReceived: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    friendsList: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    favoriteSeries: [{
        type: Schema.Types.ObjectId,
        ref: "Series"
      }],
      favoriteMovies: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
      }],
}, {
    timestamps: true
}
)

userSchema.pre('save', async function (this: Document<unknown, {}, IUser> & IUser) {
    if (!this.isModified('password')) return;
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });


userSchema.methods.comparePassword = async function(candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
  };
userSchema.methods.generateToken = function (): string {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET as string, {
        expiresIn: '24h'
    })
} 
const User = model('User', userSchema)

export default User;