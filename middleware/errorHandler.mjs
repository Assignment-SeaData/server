export function errorHandler(err, req, res, next) {
    if (!res.statusCode || res.statusCode < 400) {
        res.status(500)
    }
    res.send({ errorMessage: typeof err === 'string' ? err : err.toString() });
}