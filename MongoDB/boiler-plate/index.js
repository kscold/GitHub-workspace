const express = require('express')

const app = express()
const port = 4000
const bodyParser = require('body-parser');


const config = require('./config/key')

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => res.send('안녕하세요~ 새해복 많이 받으세요!'))


app.post('/register', (req, res) => {
    // 회원가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfor) => {

        if (err) return res.json({ sucess: false, err })
        return res.status(200).json({
            sucess: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
