function customResponse(message,code,data) {
    return {
        'message': message,
        'code': code,
        'data': data
    };
}

module.exports = { customResponse };
