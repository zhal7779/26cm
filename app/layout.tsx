import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '26cm | 감도 깊은 취향 셀렉트 샵',
  description: '감도 깊은 취향 셀렉트 샵 26cm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
