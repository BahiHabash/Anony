import config from '../../config/config.js';
import bcrypt from 'bcrypt';

/**
 * Hashes a plaintext password using bcrypt.
 *
 * @param {string} password - The plaintext password to hash.
 * @returns {Promise<string>} The hashed password.
 */
async function hashPassword(password = '') {
    return await bcrypt.hash(password, config.HASH_PASSWORD_ROUNDS);
}

export { hashPassword };
