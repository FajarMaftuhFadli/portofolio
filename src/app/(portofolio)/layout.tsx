import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Fajar's portofolio",
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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
