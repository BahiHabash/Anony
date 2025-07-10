import jwt from 'jsonwebtoken';

/**
 * Verifies and decodes a JSON Web Token (JWT) using the provided secret key.
 *
 * @function verifyJWT
 * @param {string} [token=''] - The JWT string to verify and decode.
 * @param {string} [secretKey=''] - The secret key used to verify the JWT's signature.
 * @returns {Object} The decoded JWT payload if verification is successful.
 * @throws {jwt.JsonWebTokenError|jwt.TokenExpiredError} Throws if the token is invalid or expired.
 *
 * @example
 * try {
 *   const decoded = verifyJWT(token, process.env.JWT_ACCESS_SECRET); // { id: 'userId', role: 'admin', iat: ..., exp: ... }
 * } catch (err) {
 *   console.error('Invalid or expired token:', err.message);
 * }
 */
function verifyJWT(token = '', secretKey = '') {
    return jwt.verify(token, secretKey);
}

export default verifyJWT;
