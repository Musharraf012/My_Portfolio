import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";  // ← import it

export const metadata: Metadata = {
  title: 'Mohammad',
  description: 'Created by Mohammad',
  generator: 'Mohammad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />   {/* ← this renders your toast messages */}
      </body>
    </html>
  );
}
