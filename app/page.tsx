//Home.tsx
'use client';

import { SignedIn, SignedOut} from '@clerk/nextjs';
import SignOut from '../components/Auth/SignOut';

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignOut />
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 overflow-hidden">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
