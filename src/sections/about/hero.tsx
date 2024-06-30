import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container';

const Hero = () => {
  return (
    <Container>
      <div className='relative isolate'>
        <div
          className='absolute left-1/2 right-0 top-0 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
          aria-hidden='true'
        >
          <div
            className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className='overflow-hidden'>
          <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
            <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='w-full max-w-xl lg:shrink-0 xl:max-w-md'>
                <h1 className='font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl'>
                  We’re changing the way people connect.
                </h1>
                <p className='relative mt-6 font-body text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:max-w-md lg:max-w-none'>
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                  Eu voluptate tempor esse minim amet fugiat veniam occaecat
                  aliqua.
                </p>
              </div>
              <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      alt='image 0'
                      className='aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg'
                      width={396}
                      height={528}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10' />
                  </div>
                </div>
                <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      alt='image 1'
                      className='aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg'
                      width={396}
                      height={528}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'
                      alt='image 2'
                      className='aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg'
                      width={396}
                      height={528}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10' />
                  </div>
                </div>
                <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
                      alt='image 3'
                      className='aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg'
                      width={396}
                      height={528}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      alt='image 4'
                      className='aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg'
                      width={396}
                      height={528}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
