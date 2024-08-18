'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from '~/components/ui/use-toast';
import { queryClient } from '~/lib/query-client';
import { createComment } from '~/services/comment.service';

export function useCreateComment() {
    return useMutation({
        mutationKey: ['create-comment'],
        mutationFn: createComment,
        onSuccess: async (data, variant) => {
            toast({ title: data.data.message });
            await queryClient.invalidateQueries({ queryKey: ['post', variant.post_id] });
        },
        onError: (error) => {
            toast({
                title: 'Comment has not been created',
                description: error?.message || 'An error occurred',
                variant: 'destructive',
            });
        },
    });
}
