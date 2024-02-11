import constants from '../constants/index.js'

const { HTTP_STATUS_CODES } = constants

/**
 * Authentication middleware
 * @param {Express.Request} req
 * @param {Express.Response} res 
 * @param {import('express').NextFunction} next 
 */
export default function(req, res, next) {
  /**
   * In the real world, cookies, session, and storage are places
   * we can check for authentication.
   * 
   * Instead of the hardcoded string, username + (password + salt) would
   * be one way to conduct authentication
   */
  if (req.cookies.jwt !== constants.HARDCODED_AUTHENTICATION) {
    res.status(HTTP_STATUS_CODES.UNAUTHORIZED)
    return res.end()
  }
  
  next()
}