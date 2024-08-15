import configuration from './configuration';

const dbConfig = configuration().database;

// Database configuration for mongoose
export default {
    uri: dbConfig.uri || 'mongodb://localhost:27017',
    dbName: dbConfig.dbName || 'test',
    user: dbConfig.user,
    pass: dbConfig.pass,
};
