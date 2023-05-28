const express = require('express')
const app = express()
const port = 21412


const mongoose = require('mongoose');
mongoose
    .connect(
        'mongodb+srv://ks_cold:abcd1234@boilerplate.vtm5m9t.mongodb.net/?retryWrites=true&w=majority',
        {
            // useNewUrlPaser: true,
            // useUnifiedTofology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        }
    )
    .then(() => console.log('MongoDB conected'))
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => res.send('hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))