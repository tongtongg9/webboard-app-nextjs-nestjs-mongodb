import { TUser } from './user.type';

export type TSignInPayload = Pick<TUser, 'username'>;

export type TSignInResponse = {
    access_token: string;
};
