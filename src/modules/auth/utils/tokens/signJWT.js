import jwt from 'jsonwebtoken';

/**
 * Signs and generates a JSON Web Token (JWT) using the given payload, secret, and options.
 * 
 * @function signJWT
 * @param {Object} [payload={}] - The payload to embed in the JWT (e.g., user ID, role).
 * @param {string} [secretKey=''] - The secret key used to sign the JWT.
 * @param {Object} [options={}] - Optional JWT configuration (e.g., expiresIn, issuer).
 * @returns {string} The signed JWT token as a string.
 *
 * @example
 * const jwtToken = signJWT(
 *   { id: user._id, role: user.role },
 *   process.env.JWT_ACCESS_SECRET,
 *   { expiresIn: '7d' }
 * );
 */
function signJWT(payload = {}, secretKey = '', options = {}) {
    return jwt.sign(payload, secretKey, options);
}

export default signJWT;
