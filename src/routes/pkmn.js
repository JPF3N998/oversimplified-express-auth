import { Router } from 'express'
import { pkmns } from '../data/pkmns.js'
import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

const router = Router()

router.get('/', (_, res) => {
  res.status(HTTP_STATUS_CODES.OK)
  return res.json(pkmns)
})

export default router