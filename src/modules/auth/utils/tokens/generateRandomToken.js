import crypto from 'crypto';

/**
 * Generates a cryptographically secure random token.
 * 
 * @function generateRandomToken
 * @param {number} [length=32] - The number of bytes to generate. Default is 32 bytes.
 * @returns {string} A securely generated random hexadecimal token string.
 *
 * @example
 * const token = generateRandomToken(32); // 32-character hex string
 */
function generateRandomToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}

export default generateRandomToken;