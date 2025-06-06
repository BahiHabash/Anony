import crypto from 'crypto';
import config from '../../config/config.js';

/**
 * Decrypts an encrypted message string previously encrypted with AES-GCM.
 *
 * Expects the input string to be a base64-encoded concatenation of:
 * - 12 bytes IV
 * - 16 bytes Auth Tag
 * - Ciphertext bytes
 *
 * @param {string} encryptedBase64 - The encrypted message as a base64 string.
 * @returns {string} The decrypted original plain text message.
 *
 * @throws {Error} Throws if decryption fails (e.g. invalid input or authentication failure).
 *
 * @example
 * const decrypted = decryptMessage(encrypted);
 */
function decryptMessage(encryptedBase64 = '') {
    try {
        const data = Buffer.from(encryptedBase64, 'base64');

        const iv = data.slice(0, 12);          // Extract IV (first 12 bytes)
        const authTag = data.slice(12, 28);    // Extract Auth Tag (next 16 bytes)
        const encrypted = data.slice(28);      // Remaining is ciphertext

        const decipher = crypto.createDecipheriv(
            config.MESSAGE_ENCRYPTION_ALGORITHM,
            config.MESSAGE_ENCRYPTION_KEY,
            iv
        );

        decipher.setAuthTag(authTag);

        const decrypted = Buffer.concat([
            decipher.update(encrypted),
            decipher.final(),
        ]);

        return decrypted.toString('utf8');

    } catch (error) {
        throw new Error(`Failed to decrypt message: ${error.message}`);
    }
}

export { decryptMessage };
