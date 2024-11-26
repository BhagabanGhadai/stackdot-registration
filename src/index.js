const express = require('express');
const configs = require('./config/index');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { globalRouter } = require('./routes');
const connectDB = require('./utils/db');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
globalRouter(app)

app.listen(configs.PORT, () => {
    console.log(`server is running on port ${configs.PORT}`);
})
