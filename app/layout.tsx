import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const eiko = localFont({
  src: [
    {
      path: './fonts/PPEiko-Light.woff',
      weight: '300',
    },
  ],
  variable: '--eiko-light',
});

export const metadata: Metadata = {
  title: 'Italic Studio',
  description: 'Digital design & brand agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={eiko.className}>{children}</body>
    </html>
  );
}
