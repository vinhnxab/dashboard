"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import '@/app/ui/style.css';
import '@/app/ui/style.css';
import { useEffect } from 'react';
import { roboto,inter,lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import ('./lib/bootstrap');
}, []);
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased g-sidenav-show  bg-gray-100`}>{children}</body>
    </html>
  );
}
