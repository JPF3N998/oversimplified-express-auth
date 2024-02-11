import { Router } from 'express'
import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

const router = Router()

router.post('/authenticate', (_, res) => {
  res.cookie('jwt', constants.HARDCODED_AUTHENTICATION, {
    httpOnly: true
  })
  res.status(HTTP_STATUS_CODES.OK)
  res.json()
})

router.post('/authorize', (_, res) => {
  res.cookie('role', constants.TRAINER, {
    httpOnly: true
  })
  res.status(HTTP_STATUS_CODES.OK)
  res.json()
})

export default router