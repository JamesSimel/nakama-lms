'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
}

export function NavLink({ href, label, icon: Icon, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <div>
      <Link
        href={href}
        className={cn(
          'flex items-center px-4 py-2 rounded hover:bg-gray-700',
          isActive ? 'bg-gray-700 border-r-4 border-blue-500' : 'text-gray-300'
        )}
      >
        {Icon && <Icon className="mr-3 h-5 w-5" />}
        {label}
      </Link>
      {isActive && children && (
        <div className="ml-6 mt-2 space-y-1">{children}</div>
      )}
    </div>
  );
}
