## SignUp with Email (`POST /auth/sign-up`)

- Client sends user details (email, password, etc.).
- Backend:
    - Creates the user with `isVerified: false`.
    - Triggers [Email Confirmation Request process](#email-confirmation-token-request-post-email-verification) (sends verification email).

---

## Email Confirmation Token Request (`POST /email-verification`)

- Backend searches for the user by email.

- If email not exists:

    - Return generic response with successful message.

- If email is already verified:

    - Return `400 Bad Request` (or `409 Conflict`).

- If user exists and email is **not verified**:
    - Generates a unique token (random string).
    - Hashes the token (`sha256`) before storing it in the DB.
    - Sets an expiration time (`10 min`).
    - Sends an email with a verification link:
      [`PATCH /email-verification/:token`](#email-confirmation-verify-token-patch-email-verificationtoken).

---

## Email Confirmation (Verify Token) (`PATCH /email-verification/:token`)

- Client clicks the link, sending the plaintext token to the backend.
- Backend:
    - Hashes the token and searches for a match in the DB.
    - If token invalid/expired:
        - Returns `401 Unauthorized`.
    - If token valid:
        - Marks the user’s email as `isVerified: true`.
        - Deletes the token (one-time use).
        - Returns `{ access_token, refresh_token }` (user is now logged in).

---

## ⚠ Security

- Add rate-limiting on all [email-related endpoints](#email-confirmation-token-request-post-email-verification).
- Return consistent responses (to avoid revealing if an email exists).
- Don't auto-login after [signup](#signup-with-email-post-auth-sign-up) (wait for verification).
- Delay responses (e.g., 2s) to prevent timing attacks.
