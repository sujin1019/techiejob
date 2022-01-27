const mongoose = require('mongoose');

const techSkillSchema = mongoose.Schema(            {
    skill: {type: String},
    year: {type: Number}
});

const userSchema = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        required: [true, 'ID is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    companyName: {
        type: String,
        trim: true,
        maxlength: 50,
        required: [true, 'Company Name is required']
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    },
    logo:{
        data: Buffer,
        contentType: String
    },
    position: {
        type: String,
        maxlength: 50
    },
    location: {
        type: String,
        maxlength: 50
    },
    skills: {
        tech: [techSkillSchema],
        soft: {
            type: String
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User}