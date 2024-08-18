'use client';

import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form';
import SelectCommunity from '~/features/community/components/select-community';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import Spinner from '~/components/ui/spinner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditPost, usePostDetail } from '../hooks/use-post';

interface DialogFormPostProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    type: 'create' | 'edit';
    postId?: string;
}

const FormPostSchema = z.object({
    community_id: z.string().min(1, {
        message: 'Community is required',
    }),
    title: z.string().min(1, {
        message: 'Title is required',
    }),
    content: z.string().min(4, {
        message: 'Body must be at least 4 characters',
    }),
});

type FormSchema = z.infer<typeof FormPostSchema>;

const TITLE = {
    create: 'Create Post',
    edit: 'Edit Post',
};

export default function DialogFormPost({ type, postId, open, setOpen }: DialogFormPostProps) {
    const { data: post } = usePostDetail(postId as string);
    const { mutate: mutateEditPost, isPending: isEditPending } = useEditPost();

    const form = useForm<FormSchema>({
        resolver: zodResolver(FormPostSchema),
        defaultValues: {
            community_id: '',
            title: '',
            content: '',
        },
    });

    useEffect(() => {
        if (type === 'edit' && !!post && open) {
            form.setValue('community_id', post.community._id);
            form.setValue('title', post.title);
            form.setValue('content', post.content);
        }
    }, [post]);

    function onSubmit(values: FormSchema) {
        if (type === 'create') {
            // mutateCreatePost(values);
        } else {
            mutateEditPost(
                { ...values, _id: postId as string, author_id: post?.author._id as string },
                {
                    onSuccess: () => {
                        setOpen(false);
                        form.reset();
                    },
                }
            );
        }
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen} aria-label={TITLE[type]}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{TITLE[type]}</DialogTitle>
                    </DialogHeader>

                    <Form {...form}>
                        <div className="flex flex-col space-y-4">
                            <FormField
                                control={form.control}
                                name="community_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SelectCommunity
                                                onSelectCommunity={(value) => field.onChange(value)}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="What's on your mind..." rows={8} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>

                    <DialogFooter className="flex-col space-x-0 space-y-2 sm:space-y-0">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setOpen(false);
                                form.reset();
                            }}
                            disabled={isEditPending}
                        >
                            Cancel
                        </Button>
                        <Button onClick={form.handleSubmit(onSubmit)} disabled={isEditPending}>
                            {isEditPending && <Spinner className="mr-2" />}
                            Post
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
