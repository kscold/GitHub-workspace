const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;

  // Send a mutation to create a new user using the public API
  try {
    const response = await axios.post(
      'http://backend-practice.codebootcamp.co.kr/graphql',
      {
        query: `
          mutation {
            createUser(createUserInput: {
              email: "${email}",
              password: "${password}",
              name: "${name}"
            }) {
              _id
              email
              name
            }
          }
        `,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.data.data.createUser) {
      console.log('Registration successful');

      // Fetch user data from the public API using a query
      const userResponse = await axios.post(
        'http://backend-practice.codebootcamp.co.kr/graphql',
        {
          query: `
            query {
              fetchUserLoggedIn {
                email
                name
              }
            }
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      // Store the user's information in MongoDB
      const User = mongoose.model('User', {
        email: String,
        name: String,
      });

      try {
        const newUser = new User({
          email: userResponse.data.data.fetchUserLoggedIn.email,
          name: userResponse.data.data.fetchUserLoggedIn.name,
        });
        await newUser.save();

        console.log('New user saved:', newUser);

        res
          .status(201)
          .json({ message: 'User registered and saved successfully' });
      } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Failed to register and save user' });
      }
    } else {
      console.log('회원가입 실패');
      res.status(400).json({ message: 'Failed to register user' });
    }
  } catch (error) {
    console.error('Error registering:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
