
//SignOut Component.tsx
import { SignedOut, SignInButton } from '@clerk/nextjs';
import { Users, Headphones, Book, Globe } from 'lucide-react';

export default function SignOut() {
    return (
        <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 overflow-hidden">
        {/* Background Icons */}
        <SignedOut>
            <div className="absolute inset-0 flex flex-wrap justify-around opacity-10 pointer-events-none">
            <Users className="w-64 h-64 text-blue-400" />
            <Headphones className="w-64 h-64 text-green-400" />
            <Book className="w-64 h-64 text-purple-400" />
            <Globe className="w-64 h-64 text-yellow-400" />
            </div>

            <div className="text-center bg-white p-10 rounded-lg shadow-lg z-10">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Welcome to the Nakama Intranet</h2>
            <p className="text-lg mb-6 text-gray-600">Sign in to access the HR, LMS, and Ticketing systems</p>
            
            {/* Sign In Button */}
            <SignInButton>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Sign In
                </button>
            </SignInButton>

            {/* Icons for Organizational Themes */}
            <div className="flex justify-center mt-8 space-x-8">
                <div className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto hover:scale-105 transition-transform" />
                <p className="mt-2 text-sm text-gray-700">Collaboration</p>
                </div>
                <div className="text-center">
                <Headphones className="w-12 h-12 text-green-500 mx-auto hover:scale-105 transition-transform" />
                <p className="mt-2 text-sm text-gray-700">Call Center</p>
                </div>
                <div className="text-center">
                <Book className="w-12 h-12 text-purple-500 mx-auto hover:scale-105 transition-transform" />
                <p className="mt-2 text-sm text-gray-700">LMS</p>
                </div>
                <div className="text-center">
                <Globe className="w-12 h-12 text-yellow-500 mx-auto hover:scale-105 transition-transform" />
                <p className="mt-2 text-sm text-gray-700">Intranet</p>
                </div>
            </div>
            </div>
        </SignedOut>
    </div>
    );
}