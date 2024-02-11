import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

const TRAINER = 'trainer'

/**
 * Authorization middleware
 * @param {Express.Request} req
 * @param {Express.Response} res 
 * @param {import('express').NextFunction} next 
 */
export default function(req, res, next) {
  if (req.cookies.role !== TRAINER) {
    res.status(HTTP_STATUS_CODES.UNAUTHORIZED)
    return
  }
  
  next()
}