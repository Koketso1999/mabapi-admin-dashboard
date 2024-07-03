import './globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';
import { Eye, HomeIcon, Square, Wallet, Wrench } from 'lucide-react';
import MabapiLogo from 'mabapi-logo.png'

export const metadata = {
  title: 'Mabapi Admin Dashboard',
  description:
    'Mabapi Admin Dashboard is a modern admin dashboard template that is built with Tailwind CSS and Next.js.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">


                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  
                  <span className="">Mabapi</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <HomeIcon className="h-4 w-4" />
                    Dashboard
                  </NavItem>
                  <NavItem href="/users">
                    <UsersIcon className="h-4 w-4" />
                    Users
                  </NavItem>
                  <NavItem href="/properties">
                    <Square className="h-4 w-4" />
                    Properties
                  </NavItem>
                  <NavItem href="/maintenance">
                    <Wrench className="h-4 w-4" />
                    Maintenance
                  </NavItem>
                  <NavItem href="/financial">
                    <Wallet className="h-4 w-4" />
                    Payments
                  </NavItem>
                  <NavItem href="/viewingrequests">
                    <Eye className="h-4 w-4" />
                    View Requests
                  </NavItem>
                  <NavItem href="/settings">
                    <SettingsIcon className="h-4 w-4" />
                    Settings
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                <Logo />
                <span className="">ACME</span>
              </Link>
              <User />
            </header>
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
