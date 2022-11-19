import expressLoader from './express';

export default async (expressApp: any) => {
    await expressLoader(expressApp);
    console.log('Express Intialized');
}