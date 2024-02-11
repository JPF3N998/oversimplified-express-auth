import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

/**
 * Authorization middleware
 * @param {Express.Request} req
 * @param {Express.Response} res 
 * @param {import('express').NextFunction} next 
 */
export default function(req, res, next) {
  /**
   * In the real-world: jwt, session props would be checked
   * to see if user has sufficient privileges to execute the action
   */
  if (req.cookies.role !== constants.TRAINER) {
    res.status(HTTP_STATUS_CODES.UNAUTHORIZED)
    return res.end()
  }
  
  next()
}