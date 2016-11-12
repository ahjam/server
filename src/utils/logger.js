import winston from 'winston';
import env from './env';

const { Logger, transports } = winston;
const level = env.isProduction() ? 'error' : 'debug';

const logger = new Logger({
    level,
    transports: [
        new transports.Console({ colorize: true })
    ]
});

export default logger;
