import { useMutation } from '@tanstack/react-query';
import { signIn } from '~/services/auth.service';
import { toast } from '~/components/ui/use-toast';
import { useAuthStore } from '../store/auth.store';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export function useSignIn() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const { setToken } = useAuthStore();

    return useMutation({
        mutationKey: ['sign-in'],
        mutationFn: signIn,
        onSuccess: (data) => {
            setToken(data.data.access_token);
            toast({ title: 'Sign In Success' });
            const redirect = searchParams.get('redirect');
            router.replace(redirect || '/');
        },
        onError: (error) => {
            toast({
                title: 'Sign In Failed',
                description: error?.message || 'An error occurred',
                variant: 'destructive',
            });
        },
    });
}
