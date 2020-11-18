// const winston = require('winston');
// const { combine, timestamp, printf } = format;

// const myFormat = printf(({ timestamp, message }) => {
//   return `${timestamp} [${message}]`;
// });

// global.logger = winston.createLogger({
//   format: combine(
//     timestamp(),
//     myFormat
//   ),
//   transports: [
//     new winston.transports.Console()
//   ],
// });

if (process.env.NODE_ENV === "production") {
    console.log = () => {};
}

