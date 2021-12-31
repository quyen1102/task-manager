const {CustomAPIErorr} = require('../error/cumstom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIErorr) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: err})
}

module.exports = errorHandlerMiddleware