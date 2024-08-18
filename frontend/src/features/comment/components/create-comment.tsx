'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { useSignInFirst } from '~/features/auth/hooks/use-sign-in-first';
import { useCreateComment } from '../hooks/use-comment';
import Spinner from '~/components/ui/spinner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserStore } from '~/features/auth/store/user.store';
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form';

const FormCommentSchema = z.object({
    content: z.string().min(4, {
        message: 'Body must be at least 4 characters',
    }),
});

type FormSchema = z.infer<typeof FormCommentSchema>;

interface CreateCommentProps {
    postId: string;
}

export default function CreateComment({ postId }: CreateCommentProps) {
    const [openInputComment, setOpenInputComment] = useState(false);
    const [openDialogComment, setOpenDialogComment] = useState(false);
    const { user } = useUserStore((state) => state);

    const { mutate: mutateCreateComment, isPending } = useCreateComment();

    const { AlertComponent: DesktopAlertComponent, handleAction: desktopHandleAction } = useSignInFirst(() =>
        setOpenInputComment(true)
    );
    const { AlertComponent: MobileAlertComponent, handleAction: mobileHandleAction } = useSignInFirst(() =>
        setOpenDialogComment(true)
    );

    const form = useForm<FormSchema>({
        resolver: zodResolver(FormCommentSchema),
        defaultValues: {
            content: '',
        },
    });

    const onSubmit = (values: FormSchema) => {
        if (!user) return alert('You must be signed in to create a post');

        mutateCreateComment(
            {
                content: values.content,
                post_id: postId,
                author_id: user!._id,
            },
            {
                onSuccess: () => {
                    form.reset();
                    setOpenInputComment(false);
                    setOpenDialogComment(false);
                },
            }
        );
    };

    return (
        <>
            {!openInputComment ? (
                <div className="md:block hidden">
                    <Button
                        variant="outline"
                        className="border-primary text-primary hover:text-primary"
                        onClick={desktopHandleAction}
                    >
                        Add Comments
                    </Button>
                </div>
            ) : (
                <div className="md:block space-y-2 hidden">
                    <Form {...form}>
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="What's on your mind..."
                                            rows={4}
                                            className="mt-4"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </Form>

                    <div className="flex sm:flex-row flex-col sm:justify-end space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                        <Button variant="outline" disabled={isPending} onClick={() => setOpenInputComment(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isPending} onClick={form.handleSubmit(onSubmit)}>
                            {isPending && <Spinner className="mr-2" />}
                            Post
                        </Button>
                    </div>
                </div>
            )}

            <div className="block md:hidden">
                <Button
                    variant="outline"
                    className="border-primary text-primary hover:text-primary"
                    onClick={mobileHandleAction}
                >
                    Add Comments
                </Button>
            </div>

            <Dialog open={openDialogComment} onOpenChange={setOpenDialogComment} aria-label="Create Post">
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Comments</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="What's on your mind..."
                                                rows={4}
                                                className="mt-4"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>

                    <DialogFooter className="flex-col space-x-0 space-y-2 sm:space-y-0">
                        <Button variant="outline" disabled={isPending} onClick={() => setOpenDialogComment(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                            {isPending && <Spinner className="mr-2" />}
                            Post
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {DesktopAlertComponent}
            {MobileAlertComponent}
        </>
    );
}
