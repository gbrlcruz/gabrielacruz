import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head>
                <meta name="facebook-domain-verification" content="j8ft2wz38gwjcwwjq3fpjr09n2gsnw" />
            </head>
            <body className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white font-sans antialiased">
                {children}
            </body>
        </html>
    );
}