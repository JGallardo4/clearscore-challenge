import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ideas',
  description: 'Keep track of your ideas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
