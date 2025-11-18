import { Router } from "express";
import express from "express";
import authRouter from './auth'
import serialsRouter from './serials'
const router = Router()

router.use(express.json())

router.use('/auth', authRouter)

router.use('/serials', serialsRouter)


export default router