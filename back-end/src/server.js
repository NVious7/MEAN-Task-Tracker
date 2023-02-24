require('dotenv').config();

const mongoose = require("mongoose")

const { PORT = 5000 } = process.env.PORT;

const app = require('./app');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to DB & Listening on port:', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })