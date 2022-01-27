const mongoose = require('mongoose');

const techSkillSchema = new mongoose.Schema(            {
    skill: {type: String},
    year: {type: Number}
});

const userSchema = mongoose.Schema({
    created: {
        createdAt: true,
        updatedAt: true
    },
    logo:{
        data: Buffer,
        contentType: String
    },
    companyName: {
        type: String,
        trim: true,
        maxlength: 50,
        required: [true, 'Company Name is required']
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
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User}