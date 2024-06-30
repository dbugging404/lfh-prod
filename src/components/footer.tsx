import Link from 'next/link';
import { Container } from './container';
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <FaFacebook className='text-blue-500 hover:text-blue-400 dark:text-white dark:hover:text-blue-500' />
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <FaInstagram className='text-pink-500 hover:text-pink-400 dark:text-white dark:hover:text-pink-500' />
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <FaTwitter className='text-black dark:text-white' />,
  },
  {
    name: 'Linkedin',
    href: '#',
    icon: (
      <FaLinkedin className='text-blue-500 hover:text-blue-400 dark:text-white dark:hover:text-blue-500' />
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <FaYoutube className='text-red-500 hover:text-red-400 dark:text-white dark:hover:text-red-500' />
    ),
  },
];

const Footer = () => {
  return (
    <Container className=''>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-xl text-zinc-400 hover:text-zinc-500'
            >
              <span className='sr-only'>{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center font-body text-sm leading-5 text-zinc-500 dark:text-zinc-400'>
            &copy;{' '}
            {`${new Date().getFullYear()} Linkedin For Her Inc. All rights reserved.`}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
