import CallToAction from '@/components/cta';
import Content from '@/sections/home/content';
import Hero from '@/sections/home/hero';
import Photos from '@/sections/home/photos';
import Testimonaial from '@/sections/home/testimonial';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import CourseComponent from '@/components/course';
import { Container } from '@/components/container';
import Link from 'next/link';

interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
}

interface Course {
  id: string;
  title: string;
  image: { url: string };
  price: number;
  category: string;
  slug: string;
}

export default function Home({
  blogs,
  courses,
}: {
  blogs: Blog[];
  courses: Course[];
}) {
  return (
    <div>
      <>
        <Hero />
        <Photos />
        <Content blogs={blogs} />
        <Testimonaial />
        <Container>
          <div className='md:flex md:items-center md:justify-between'>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200'>
              Our courses
            </h2>
            <Link
              href='/courses'
              className='hidden font-body text-sm font-medium text-teal-600 hover:text-teal-500 md:block'
            >
              View all courses
              <span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
          <CourseComponent courses={courses} />
          <div className='mt-8 text-sm md:hidden'>
            <Link
              href='/courses'
              className='font-body font-medium text-teal-600 hover:text-teal-500'
            >
              View all courses
              <span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
        </Container>
        <CallToAction />
      </>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        blogs(first: 3) {
          title
          date
          description
          slug
        }
        courses(first: 4) {
          id
          title
          image {
            url
          }
          price
          category
          slug
        }
      }
    `,
  });

  return {
    props: {
      blogs: data.blogs,
      courses: data.courses,
    },
    revalidate: 180,
  };
};
