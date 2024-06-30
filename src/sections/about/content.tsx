import { Container } from '@/components/container';
import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <Container>
      <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <h2 className='font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl'>
            Our mission
          </h2>
          <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
            <div className='font-body lg:w-full lg:max-w-2xl lg:flex-auto'>
              <p className='text-xl leading-8 text-zinc-600 dark:text-zinc-400'>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div className='mt-10 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300'>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className='mt-10'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className='lg:flex lg:flex-auto lg:justify-center'>
              <dl className='w-64 space-y-8 xl:w-80'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='flex flex-col-reverse gap-y-4'
                  >
                    <dt className='font-body text-base leading-7 text-zinc-600 dark:text-zinc-400'>
                      {stat.label}
                    </dt>
                    <dd className='font-heading text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <Image
          src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt=''
          className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
          width={2832}
          height={1416}
        />
      </div>

      {/* Values section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl'>
            Our values
          </h2>
          <p className='mt-6 font-body text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {values.map((value) => (
            <div key={value.name}>
              <dt className='font-heading font-semibold text-zinc-900 dark:text-zinc-200'>
                {value.name}
              </dt>
              <dd className='mt-1 font-body text-zinc-600 dark:text-zinc-400'>
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
};

export default Content;

const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
];
const values = [
  {
    name: 'Be world-class',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Share everything you know',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Always learning',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Be supportive',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Take responsibility',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Enjoy downtime',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
];
