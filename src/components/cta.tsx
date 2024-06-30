import { HiCheckCircle } from 'react-icons/hi2';
import Image from 'next/image';
import { Container } from './container';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';

const benefits = [
  'Personalized LinkedIn Profile Services:',
  'Expert Career Coaching',
  'Inspiring Motivational Speaking',
  'Workshops and Webinars',
  'Exclusive Networking Opportunities',
  'Success Stories and Testimonials:',
];

const CallToAction = () => {
  return (
    <Container>
      <div className='my-12 sm:my-0 sm:py-12'>
        <div className='relative isolate'>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
              <Image
                className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
                src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                alt='Call to action image'
                width={800}
                height={800}
              />
              <div className='w-full flex-auto'>
                <h2 className='font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl'>
                  Partner with LinkedIn For Her
                </h2>
                <p className='mt-4 font-body text-base text-zinc-600 dark:text-zinc-300'>
                  At LinkedIn For Her, we empower women to excel in their
                  careers with top-notch LinkedIn profile services, career
                  coaching, and motivational speaking. Join our network and see
                  how we can help you or your organization thrive.
                </p>
                <ul
                  role='list'
                  className='mt-10 grid grid-cols-1 gap-y-2.5 font-body text-zinc-900 dark:text-zinc-50'
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className='flex items-center gap-x-4'>
                      <HiCheckCircle
                        className='h-7 w-5 flex-none'
                        aria-hidden='true'
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href='#' className='mt-10 flex'>
                  <Button
                    className='bg-teal-400 font-body text-sm font-semibold leading-6 hover:bg-teal-600'
                    placeholder={'Contact Us'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Contact us now!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallToAction;
