import { TUser } from '~/lib/types';
import http from './http-common';
import { TSignInResponse } from '~/lib/types/auth.type';

export const signIn = async (payload: Pick<TUser, 'username'>) => http.post<TSignInResponse>('/auth/sign-in', payload);

export const getProfile = async () => http.get<TUser>('/auth/profile');
