function catchAsync (fn) {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    };
}

export default catchAsync;
