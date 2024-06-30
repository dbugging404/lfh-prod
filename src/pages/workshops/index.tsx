import Image from 'next/image';
import Head from 'next/head';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import { Card } from '@/components/card';
import { SimpleLayout } from '@/components/simpleLayout';
import { JSX, SVGProps } from 'react';

interface workshopsProps {
  workshops: {
    id: string;
    title: string;
    description: string;
    images: { url: string }[];
    link: string;
    label: string;
    slug: string;
  }[];
}

function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
        fill='currentColor'
      />
    </svg>
  );
}

const Workshops = ({ workshops }: workshopsProps) => {
  console.log(workshops);
  return (
    <>
      <Head>
        <title>Workshops - Linkedin for her</title>
        <meta
          name='description'
          content='Empowering Workshops to Elevate Your Career'
        />
      </Head>
      <SimpleLayout
        title='Empowering Workshops to Elevate Your Career'
        intro='At LinkedIn For Her, we are passionate about creating impactful workshops designed to help women excel in their professional journeys. Our workshops cover a range of topics from LinkedIn profile optimization to leadership development and more. Many of our workshops are open-source, so if you find something that resonates with you, feel free to explore, learn, and contribute your ideas for improvement. Join us and take the next step towards achieving your career goals with confidence and support.'
      >
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
        >
          {workshops.map((workshop) => (
            <Card as='li' key={workshop.title}>
              <div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                <Image
                  src={workshop.images[0].url}
                  alt={workshop.title}
                  width={48}
                  height={48}
                  className='w-full rounded-full'
                />
              </div>
              <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                <Card.Link href={`/workshops/${workshop.slug}`}>
                  {workshop.title}
                </Card.Link>
              </h2>
              <Card.Description>{workshop.description || ''}</Card.Description>
              <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
                <LinkIcon className='h-6 w-6 flex-none' />
                <span className='ml-2'>{workshop.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
};

export default Workshops;

export const getStaticProps = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        workshops {
          id
          title
          description
          images {
            url
          }
          link
          label
          slug
        }
      }
    `,
  });

  return {
    props: {
      workshops: data.workshops,
    },
    revalidate: 180,
  };
};
