import { StatusCodes } from 'http-status-codes';

const validateReqeust = ((schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    } catch(err) {
        const errorMessage = err.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
        }));

        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Request Validation Failed',
            error: errorMessage,
            status: 'fail'
        });
    }
});

export default validateReqeust;
