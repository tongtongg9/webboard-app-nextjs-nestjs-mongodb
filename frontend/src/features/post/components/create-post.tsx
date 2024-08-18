'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Textarea } from '~/components/ui/textarea';
import { Input } from '~/components/ui/input';
import { useSignInFirst } from '~/features/auth/hooks/use-sign-in-first';
import SelectCommunity from '~/features/community/components/select-community';

import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Spinner from '~/components/ui/spinner';
import { useUserStore } from '~/features/auth/store/user.store';
import { useCreatePost } from '../hooks/use-post';

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

export default function CreatePost() {
    const [open, setOpen] = useState(false);
    const { user } = useUserStore((state) => state);
    const { mutate: mutateCreatePost, isPending } = useCreatePost();

    const handleOpen = () => {
        setOpen(true);
    };
    const { handleAction, AlertComponent } = useSignInFirst(handleOpen);

    const form = useForm<FormSchema>({
        resolver: zodResolver(FormPostSchema),
        defaultValues: {
            community_id: '',
            title: '',
            content: '',
        },
    });

    const onSubmit = (values: FormSchema) => {
        if (!user) return alert('You must be signed in to create a post');

        mutateCreatePost(
            { ...values, author_id: user!._id },
            {
                onSuccess: () => {
                    setOpen(false);
                    form.reset();
                },
            }
        );
    };

    return (
        <>
            <Button className="flex justify-center items-center space-x-1" onClick={handleAction}>
                Create
                <PlusIcon className="ml-2 w-4 h-4" />
            </Button>

            {AlertComponent}

            <Dialog open={open} onOpenChange={setOpen} aria-label="Create Post">
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Post</DialogTitle>
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
                        >
                            Cancel
                        </Button>
                        <Button onClick={form.handleSubmit(onSubmit)}>
                            {isPending && <Spinner className="mr-2" />}
                            Post
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
