'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { useSignIn } from '../hooks/use-sign-in';
import Spinner from '~/components/ui/spinner';

const FormSignInSchema = z.object({
    username: z.string().min(1, {
        message: 'Username is required',
    }),
});

type FormSchema = z.infer<typeof FormSignInSchema>;

export default function FormSignIn() {
    const { mutate: mutateSignIn, isPending } = useSignIn();

    const form = useForm<FormSchema>({
        resolver: zodResolver(FormSignInSchema),
        defaultValues: {
            username: '',
        },
    });

    function onSubmit(values: FormSchema) {
        mutateSignIn(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="p-2 rounded-lg text-white" variant="default" disabled={isPending}>
                        {isPending && <Spinner className="mr-2" />}
                        Sign In
                    </Button>
                </div>
            </form>
        </Form>
    );
}
