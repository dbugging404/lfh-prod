import Image from 'next/image';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import HeroImage from '@/assets/suma.png';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { Container } from '@/components/container';

interface TypingEffectProps {
  words: string[];
  speed?: number;
  eraseSpeed?: number;
  typingDelay?: number;
  eraseDelay?: number;
}

const Hero = () => {
  return (
    <Container>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-y-14 py-16 lg:grid-cols-2 lg:py-20'>
        <div className='flex flex-col items-start justify-center'>
          <p className='max-w-lg font-heading text-2xl'>
            👋, I&apos;m Suma Annegowda,
          </p>
          <TypingEffect
            words={[
              'an Entrepreneur.',
              'a Career Coach.',
              'a Motivational Speaker.',
            ]}
          />

          <div className='max-w-lg space-y-4 font-body text-base leading-relaxed tracking-wide sm:text-lg'>
            <div>
              I&apos;m the founder and CEO of <strong>LinkedIn For Her</strong>,
              a platform dedicated to empowering women in their professional
              journeys bringing together a community of like-minded individuals
              who are on a mission to make a difference.
            </div>
            <div className='hidden sm:block'>
              LinkedInForHER is dedicated to educating and empowering women
              professionals, entrepreneurs, those on career breaks, and
              students. Our mission is to help them create distinctive LinkedIn
              profiles that stand out, establish a strong personal brand, and
              unlock limitless opportunities.
            </div>
          </div>
          <div className='mt-16 flex space-x-6'>
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target='_blank'
                rel='noreferrer'
                className='text-2xl'
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className='mx-auto flex max-w-md items-center justify-center rounded-md bg-gradient-to-b from-zinc-500 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900'>
          <Image
            src={HeroImage}
            width={500}
            height={500}
            alt='Hero Image'
            className=''
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  speed = 100,
  eraseSpeed = 50,
  typingDelay = 1500,
  eraseDelay = 2000,
}) => {
  return (
    <ReactTypingEffect
      text={words}
      className='py-8 font-heading text-3xl font-bold md:text-4xl lg:py-10 lg:text-4xl'
      speed={speed}
      cursor='_'
      eraseSpeed={eraseSpeed}
      typingDelay={typingDelay}
      eraseDelay={eraseDelay}
    />
  );
};

const socials = [
  {
    id: 1,
    icon: (
      <FaLinkedinIn className='text-blue-500 hover:text-blue-400 dark:text-white dark:hover:text-blue-500' />
    ),
    link: 'https://www.linkedin.com/in/sumagupta/',
  },
  {
    id: 2,
    icon: <FaXTwitter className='text-black dark:text-white' />,
    link: 'https://twitter.com/sumagupta',
  },
  {
    id: 3,
    icon: (
      <FaInstagram className='text-pink-500 hover:text-pink-400 dark:text-white dark:hover:text-pink-500' />
    ),
    link: 'https://www.instagram.com/sumagupta/',
  },
  {
    id: 4,
    icon: (
      <FaYoutube className='text-red-500 hover:text-red-400 dark:text-white dark:hover:text-red-500' />
    ),
    link: 'https://www.youtube.com/channel/UCX1Zxv3V1Zd0s3W1JZ8R6Rw',
  },
];
