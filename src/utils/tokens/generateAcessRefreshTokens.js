import config from '../../config/config.js';
import signJWT from './signJWT.js';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import generateRandomToken from './generateRandomToken.js';

/**
 * Generates an access token (JWT) and a refresh token (random string).
 * 
 * @function generateAccessRefreshTokens
 * @param {Object} [payload={}] - The payload to encode inside the JWT access token.
 * @returns {Object} tokens - An object containing the generated tokens { accessToken, refreshToken }.
 *
 * @example
 * const { accessToken, refreshToken } = generateAccessRefreshTokens({ id: user._id, role: user.role });
 */
function generateAccessRefreshTokens (payload = {}) {
    try {
        const accessToken = signJWT(
            { ...payload, type: 'access' }, 
            config.ACCESS_TOKEN_SECRET, 
            { expiresIn: config.ACCESS_TOKEN_EXPIRES_IN }
        );
        const refreshToken = generateRandomToken(32);
    
        return { accessToken, refreshToken };

    } catch(err) {
        console.error('Token generation failed:', err);
        throw new AppError(`Token generation error: ${err}.`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

export default generateAccessRefreshTokens;