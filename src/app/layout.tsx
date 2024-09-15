import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/shared/styles/index.scss';

export const metadata: Metadata = {
   title: 'Notes',
   description: 'Персональная база знаний, приложение для создания заметок',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode;
}>) {
   return (
      <html lang="ru">
         <body>{children}</body>
      </html>
   );
}
