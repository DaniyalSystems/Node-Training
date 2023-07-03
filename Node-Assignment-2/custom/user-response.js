function customUserResponse(data) {

    var userObj = {
        '_id': data.id,
        'name':  data.name,
        'email': data.email,
        'phone': data.phone,
        'date': data.date,
        'token' : data.token,
    };

    return userObj;
}

module.exports = { customUserResponse };
