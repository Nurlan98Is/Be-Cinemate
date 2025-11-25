import { Router } from "express";
import express from "express";
import authRouter from './auth'
import serialsRouter from './series'
import usersRouter from './users'
const router = Router()

router.use(express.json())

router.use('/auth', authRouter)

router.use('/series', serialsRouter)

router.use('/users', usersRouter)

export default router