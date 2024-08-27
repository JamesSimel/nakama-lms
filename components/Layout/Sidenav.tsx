'use client';

import { navLinks } from '../../lib/navLinks';
import { NavLink } from '../Common/NavLink';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Sidenav({ closeSidebar }: { closeSidebar: () => void }) {
  const { user } = useUser();

  return (
    <nav className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <ul className="flex-1 space-y-2 p-4">
        {navLinks.map((link) => (
          <li key={link.href} className="py-2" onClick={closeSidebar}>
            <NavLink href={link.href} label={link.label} icon={link.icon}>
              {link.children?.map((child) => (
                <NavLink key={child.href} href={child.href} label={child.label} icon={child.icon} />
              ))}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center p-4 mt-auto space-y-2">
        <div className="w-20 h-20 flex items-center justify-center bg-gray-700 rounded-full">
          <UserButton />
        </div>
        {user && <span className="text-white text-lg font-medium">{user.firstName}</span>}
      </div>
    </nav>
  );
}
