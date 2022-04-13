'use strict'
const {createLogger, transports, format} = require('winston');
const {combine, timestamp, label, printf, json, simple, colorize} = format;

// combine 메소드에 인자로 건네진 메소드 중 가장 마지막 것이 출력포맷이 됨.
const printfFormat = printf( ({timestamp, label, level, message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const logFormat = {

    file : combine(

        label({ label : 'firstNode'}),
        timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),
        colorize(),
        // simple()
        printfFormat
    ),
    console : combine(

        label({ label : 'firstNode'}),
        colorize(),
        simple(),
        printfFormat
)};

const opts = {

    file : new transports.File({
        filename : 'access_winston.log',
        dirname : './log_winston',
        level : 'info',
        format : logFormat.file
    }),
    console : new transports.Console({
        level : 'info',
        format : logFormat.console
    })
};
const logger = createLogger({

    transports : [opts.file]
});

if(process.env.NODE_ENV !== 'production'){
    logger.add(opts.console);
}
module.exports = logger;