import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head>
                <meta name="facebook-domain-verification" content="gv103o1abk61atpf7av2t5d3mfujg1" />
            </head>
            <body className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white font-sans antialiased">
                {children}
            </body>
        </html>
    );
}