'use client';

import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
    to?: string;
}

export default function BackButton({ to = '/' }: BackButtonProps) {
    const router = useRouter();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="border-primary bg-primary-100 hover:bg-primary-100/90 rounded-full text-primary-500 hover:text-primary-500"
            onClick={() => router.push(to)}
        >
            <ArrowLeft className="w-5 h-5" />
        </Button>
    );
}
