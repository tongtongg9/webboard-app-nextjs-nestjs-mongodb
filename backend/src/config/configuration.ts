export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        uri: process.env.MONGO_URI,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        dbName: process.env.MONGO_DB_NAME,
    },
    jwt: {
        secret_key: process.env.SECRET_KEY,
        expires_in: process.env.EXPIRES_IN,
    },
});
