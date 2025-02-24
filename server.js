const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config(); 

const app = express();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', todoRoutes);


const PORT = process.env.PORT || 3080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
