import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Fajar's links",
    template: '%s | Fajar',
  },
  description: "Hi, I'am Fajar!",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
