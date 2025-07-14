import crypto from 'crypto';
import config from '../../config/config.js';

/**
 * Encrypts a plain text message using AES-GCM algorithm.
 *
 * The returned encrypted message is a base64 string combining:
 * - 12 bytes IV (Initialization Vector)
 * - 16 bytes Auth Tag (for authentication)
 * - Ciphertext bytes
 *
 * @param {string} message - The message text to encrypt.
 * @returns {string} The base64 encoded encrypted message.
 *
 * @throws {Error} Throws if encryption fails.
 *
 * @example
 * const encrypted = encryptMessage("Hello world");
 */
function encryptMessage(message = '') {
    
    const iv = crypto.randomBytes(12); // 12 bytes IV for GCM
    const cipher = crypto.createCipheriv(
        config.MESSAGE_ENCRYPTION_ALGORITHM,
        config.MESSAGE_ENCRYPTION_KEY,
        iv
    );

    const encrypted = Buffer.concat([
        cipher.update(message, 'utf8'),
        cipher.final(),
    ]);

    const authTag = cipher.getAuthTag();

    // Combine iv + authTag + encrypted and encode to base64
    return Buffer.concat([iv, authTag, encrypted]).toString('base64');
}

export { encryptMessage };