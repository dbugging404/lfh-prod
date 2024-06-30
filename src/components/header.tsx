import React from 'react';
import ThemeToggle from './theme-toggle';
import { dataHeader } from './data/header';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import Logo2 from '@/assets/Logo';
import Sidebar from './sidebar';

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-16'>
        <Link href={'/'} className='w-28'>
          <Logo2 />
        </Link>
        <div className='hidden space-x-5 rounded-full border px-6 py-2 shadow-sm dark:border-zinc-700/50 dark:bg-zinc-800 md:block'>
          {dataHeader.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`font-body text-sm transition duration-200 ${
                router.pathname === item.link
                  ? 'font-bold text-teal-300'
                  : 'text-zinc-900 hover:text-teal-300 dark:text-zinc-100'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-between space-x-3'>
          <ThemeToggle />
          <Button
            color='teal'
            size='sm'
            className='font-body text-base font-normal normal-case'
            placeholder={'contact'}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Contact
          </Button>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
