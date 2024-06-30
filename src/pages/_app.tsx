import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useRef } from 'react';

function usePrevious(value: any) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);
  return (
    <Layout>
      <div className='fixed inset-0 flex justify-center sm:px-8'>
        <div className='flex w-full max-w-7xl lg:px-8'>
          <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative'>
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
