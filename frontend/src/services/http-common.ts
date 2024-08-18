import axios from 'axios';
import { useAuthStore } from '~/features/auth/store/auth.store';
import { NEXT_PUBLIC_API_URL } from '~/lib/constants';

console.log('API_URL', NEXT_PUBLIC_API_URL);

const instance = axios.create({
    baseURL: NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
    (config) => {
        const auth = JSON.parse(localStorage.getItem('auth-a-board') || '{}');

        const token = auth?.state?._tk;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
