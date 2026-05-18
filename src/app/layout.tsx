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
            <body>{children}</body>
        </html>
    );
}