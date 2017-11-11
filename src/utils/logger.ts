import * as winston from 'winston';

const logger = new winston.Logger({
  transports: [
    new(winston.transports.File)({ filename: 'somefile.log' }),
    new winston.transports.Console({
      colorize: true,
      json: true
    })
  ]
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};

export { logger };
