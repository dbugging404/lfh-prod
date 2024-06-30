import React from 'react';
import Hero from '@/sections/about/hero';
import Content from '@/sections/about/content';
import CallToAction from '@/components/cta';

const IndexPage = () => {
  return (
    <div>
      <div className=''>
        <Hero />
        <Content />
        <CallToAction />
      </div>
    </div>
  );
};

export default IndexPage;
