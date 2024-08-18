import './globals.css';
import type { Metadata } from 'next';
import { Inter, Castoro } from 'next/font/google';
import { cn } from '~/lib/utils';
import AppProvider from '~/providers/app-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const castoro = Castoro({ weight: '400', subsets: ['latin'], variable: '--font-castoro', display: 'swap' });

export const metadata: Metadata = {
    title: 'a Board',
    description: 'a Board is a web application that allows users to create and share posts with others.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, castoro.variable, 'font-inter')}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
