import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";

import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { notFound } from "next/navigation";

import { ReactNode } from 'react';


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

const cx = (...classes) => classes.filter(Boolean).join(' ')

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function RootLayout({
    children,
    locale
}: Props) {

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <>
            <head>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
            </head>
            <main className="flex-auto min-w-0 mt-8 mx-auto max-w-md sm:max-w-lg 2xl:max-w-xl flex flex-col px-2 md:px-0 backdrop-blur-md bg-white/90 dark:bg-black/90">
                <NextIntlClientProvider messages={messages}>
                    < Navbar />
                    {children}
                </NextIntlClientProvider>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </main>
        </>
    )
}
