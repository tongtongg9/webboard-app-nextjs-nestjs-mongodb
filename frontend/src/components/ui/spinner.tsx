import { LoaderCircle, LucideProps } from 'lucide-react';
import React from 'react';
import { cn } from '~/lib/utils';

interface SpinnerProps extends LucideProps {
    className?: React.HTMLAttributes<unknown>['className'];
}

export default function Spinner({ className, ...props }: SpinnerProps) {
    return <LoaderCircle className={cn('animate-spin', className)} {...props} />;
}
