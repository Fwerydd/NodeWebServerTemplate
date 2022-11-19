import expressLoader from './express';
import morganLoader from './morgan';
import Logger from "../lib/logger";

export default async (expressApp: any) => {
    await expressLoader(expressApp);
    // Add Morgan middleware to log Express request information
    expressApp.use(morganLoader);
    Logger.info('Express Intialized');
}