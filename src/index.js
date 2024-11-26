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
}).on('error', (err) => {
    console.log(err);
    process.exit(1);
})
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})
process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
})
process.on('SIGINT', () => {
    console.log('SIGINT signal received.');
    process.exit(0);
})
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    process.exit(0);
})