'use client';
import {type ReactNode} from 'react';
import {NextUIProvider} from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>  
            <NextUIProvider>
            {children}
            </NextUIProvider>
        </SessionProvider> 
);
}