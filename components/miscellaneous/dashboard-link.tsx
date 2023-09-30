'use client';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, children }:{href:Url, children:any}) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`block text-sm  hover:text-fuchsia-700 ${
        active ? 'text-fuchsia-700 font-medium' : 'text-slate-600'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavItem;


