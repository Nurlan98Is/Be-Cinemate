import { Router } from "express";
import express from "express";
import authRouter from './auth'
import serialsRouter from './serials'
import usersRouter from './users'
const router = Router()

router.use(express.json())

router.use('/auth', authRouter)

router.use('/serials', serialsRouter)

router.use('/users', usersRouter)

export default router