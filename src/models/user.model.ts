import { Schema, model, Document, Model, Types } from 'mongoose';
import jwt from 'jsonwebtoken'

interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    nickName: string;
    password: string;
    phoneNumber: string;
    isAdmin?: boolean;
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
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

userSchema.methods.generateToken = function (): string {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET as string, {
        expiresIn: '24h'
    })
} 
const User = model('User', userSchema)

export default User;