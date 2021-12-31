
class CustomAPIErorr extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}
const createCustomError = (msg, statusCode) =>{
    return new CustomAPIErorr(msg, statusCode)
} 

module.exports = { createCustomError, CustomAPIErorr}