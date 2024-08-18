import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getInitials = (name: string) => {
    const nameSplit = name.split(' ');
    const initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[0].charAt(1).toLowerCase();
    return initials;
};

export const setQueryParams = (params: Record<string, unknown>) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            searchParams.set(key, String(value));
        }
    });
    return searchParams.toString();
};
