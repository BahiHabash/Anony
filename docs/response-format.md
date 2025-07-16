# JSON Response Structure


| Type             | Status   | Includes            | Env        |
|------------------|----------|---------------------|----------------|
| Success          | success  | `data`              | All environments |
| Fail (client error) | fail     | `message`    | Production      |
| Error (server)   | error    | `message`           | Prod           |
| Error (server)   | error    | `message`, `error`, `stack`  | Dev    |        |


---


## 🟢 Successful Response (`200 OK`, `201 Created`, etc.)

```js
res.status(statusCode).json({
    status: 'success',
    data: {}
});
```

- `status`: Always `"success"` on successful operations.
- `data`: Contains the actual response payload.

---

## 🔴 Error Response – Development Environment

In development, it's helpful to include detailed error information for debugging.

```js
res.status(statusCode).json({
    status,
    message,
    error,
    stack
});
```

- `status`: `"fail"` or `"error"` depending on `statusCode`.
- `message`: Human-readable error message.
- `error`: The actual error object.
- `stack`: Full stack trace for debugging.

---

## 🔴 Error Response – Production Environment

### ⚠ Operational Error (Handled / Expected)

```js
res.status(statusCode).json({
    status,
    message
});
```

- Safe to return to the client.

### ❌ Programming / Unknown Error

```js
res.status(500).json({
    status: 'error',
    message: 'An unknown error occurred.'
});
```

- Shows a generic error message for unexpected failures to avoid leaking internal details.

---

