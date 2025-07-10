import bcrypt from 'bcrypt';

/**
 * Compares a plaintext password with a hashed password.
 *
 * @param {string} plainPassword - The user-entered password.
 * @param {string} hashedPassword - The stored hashed password.
 * @returns {Promise<boolean>} True if match, false otherwise.
 */
async function comparePassword(plainPassword = '', hashedPassword = '') {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export { comparePassword };
