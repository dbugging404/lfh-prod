import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './theme-toggle';
import { Button } from '@material-tailwind/react';
import { dataHeader } from './data/header';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(event.target as Node)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className='z-50 focus:outline-none md:hidden'
      >
        <FaBars size={24} />
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-white opacity-50 dark:bg-black'
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 transform bg-zinc-900 text-white transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-60 md:hidden`}
      >
        <div className='flex h-24 items-center justify-center space-x-3 border-b border-zinc-700 bg-zinc-900'>
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
          <button onClick={toggleSidebar} className='focus:outline-none'>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className=''>
          {dataHeader.map((item) => (
            <Link
              href={item.link}
              className='flex items-center justify-center py-3 font-body text-lg hover:bg-zinc-700'
              key={item.id}
              onClick={closeSidebar}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
