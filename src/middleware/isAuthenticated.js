import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

const HARDCODED_AUTHENTICATION = 'xyz321'
/**
 * Authentication middleware
 * @param {Express.Request} req
 * @param {Express.Response} res 
 * @param {import('express').NextFunction} next 
 */
export default function(req, res, next) {
  if (req.cookies.jwt !== HARDCODED_AUTHENTICATION) {
    res.status(HTTP_STATUS_CODES.UNAUTHORIZED)
    return
  }
  
  next()
}