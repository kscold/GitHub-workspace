const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10 //비밀번호 암호화 자릿 수 

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user = this; //바로 위에 schma를 가르킴
    if (user.isModified('password')) //password가 변환 될 때만 암호화
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err) //에러가 나면 index.js로 보냄

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })

        })
})

const User = mongoose.model('User', userSchema)

module.exports = { User }