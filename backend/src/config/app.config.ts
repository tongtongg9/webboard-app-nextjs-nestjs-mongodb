import configuration from './configuration';

const jwtConfig = configuration().jwt;

export default {
    secret_key: jwtConfig.secret_key,
    expires_in: '1d',
};
