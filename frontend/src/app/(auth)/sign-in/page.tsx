import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import FormSignIn from '~/features/auth/components/form-sign-in';

export const metadata: Metadata = {
    title: 'SignIn - a Board',
    description: 'a Board is a web application that allows users to create and share posts with others.',
};


export default function SignIn() {
    return (
        <main className="md:grid md:grid-cols-5 bg-primary-500 min-h-dvh">
            <section className="md:order-last md:col-span-2 bg-primary-300 rounded-tl-none md:rounded-tl-[36px] rounded-bl-[36px] rounded-br-[36px] md:rounded-br-none w-full h-80 md:h-full container">
                <div className="flex flex-col justify-center items-center h-full">
                    <Image
                        src="/notebook-papers-pencil.png"
                        alt="Logo"
                        width={300}
                        height={230}
                        className="w-44 md:w-80 object-cover"
                    />
                    <div className="mt-4 font-castoro text-2xl text-white italic">
                        <h2>a Board</h2>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center md:col-span-3 py-8 w-full h-full container">
                <div className="flex flex-col space-y-8 w-full max-w-sm md:max-w-md h-full md:h-auto">
                    <h2 className="text-2xl text-white">Sign In</h2>
                    
                    <FormSignIn />
                </div>
            </section>
        </main>
    );
}
