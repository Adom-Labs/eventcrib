import WagmiProvider from '@/context/WagmiContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import AppProvider from '@/context/AppProvider';
import SetupWeb3Modal from './SetupWeb3Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EventCrib | First Web3 Event Management System',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} id='main_layout'>
        <WagmiProvider>
          <Toaster position='bottom-right' />
          <AppProvider>{children}</AppProvider>
        </WagmiProvider>
        <SetupWeb3Modal />
      </body>
    </html>
  );
}
