'use client';
import './globals.css';
import { ClerkProvider, SignedIn } from '@clerk/nextjs';
import Sidenav from '../components/Layout/Sidenav';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react'; // Icons from Lucide

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex h-screen overflow-hidden">
          <div className="flex flex-grow">
            <SignedIn>
              {/* Hamburger Menu Button */}
              <div className="absolute top-4 left-4 z-50 lg:hidden">
                <Button variant="ghost" onClick={toggleSidebar}>
                  {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>

              {/* Sidebar */}
              <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform ${
                  sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform lg:translate-x-0 lg:static`}
              >
                <Sidenav closeSidebar={closeSidebar} />
              </div>
            </SignedIn>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-4 overflow-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
