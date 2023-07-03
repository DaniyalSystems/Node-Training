const mongoose = require('mongoose');
const Joi = require('joi');

const userTypes = ['user', 'admin'];

const User = mongoose.model('Users', new mongoose.Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 20},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true,minLength: 8},
    user_type: {type: String, required: true, enum: userTypes},
    date: {type: Date,default: Date.now},
}));

const UserValidation = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().required(),
    user_type: Joi.string().valid(...userTypes).required(),
});

module.exports = {UserValidation, User};
