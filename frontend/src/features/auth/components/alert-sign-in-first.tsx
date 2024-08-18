'use client';

import { useRouter } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '~/components/ui/alert-dialog';

interface AlertSignInFirstProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function AlertSignInFirst({ open, setOpen }: AlertSignInFirstProps) {
    const router = useRouter();

    const handleGoToSignIn = () => {
        setOpen(false);
        const url = new URL(window.location.href);
        router.push('/sign-in?redirect=' + encodeURIComponent(url.pathname));
    };

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen} aria-label="Sign In First">
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Sign In First</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>You need to sign in first to access this feature.</AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleGoToSignIn}>Sign In</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
