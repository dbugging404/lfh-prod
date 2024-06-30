import { Container } from '@/components/container';
import Markdown from 'react-markdown';
import Image from 'next/image';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

interface courseProps {
  course: {
    title: string;
    description: string;
    price: number;
    category: string;
    image: { url: string };
    slug: string;
    content: string;
  };
}

const CoursePage = ({ course }: courseProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <Container>
      <div className=''>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          {/* Product details */}
          <div className='lg:max-w-lg lg:self-end'>
            <nav aria-label='Breadcrumb' className='font-body'>
              Courses / {convertToTitleCase(course?.category)} / {course?.title}
            </nav>

            <div className='mt-4'>
              <h1 className='font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 sm:text-4xl'>
                {course?.title}
              </h1>
            </div>

            <section aria-labelledby='information-heading' className='mt-4'>
              <h2 id='information-heading' className='sr-only'>
                Course information
              </h2>

              <div className='flex items-center'>
                <p className='font-body text-lg text-zinc-900 dark:text-zinc-100 sm:text-xl'>
                  ₹{course?.price}
                </p>
              </div>

              <div className='mt-4 space-y-6'>
                <p className='text-base text-zinc-500 dark:text-zinc-400'>
                  {course?.description}
                </p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg'>
              <Image
                src={course?.image?.url}
                alt={course?.title}
                className='h-full w-full object-cover object-center'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product form */}
          <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
            <section aria-labelledby='options-heading'>
              <div className='mt-10'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 font-body text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-50'
                >
                  Buy Now!
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className='prose mx-auto font-body text-zinc-800 dark:text-zinc-200'>
          <Markdown>{course?.content}</Markdown>
        </div>
      </div>
    </Container>
  );
};

export default CoursePage;

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = await hygraph.query({
    query: gql`
      query ($slug: String!) {
        course(where: { slug: $slug }) {
          title
          description
          image {
            url
          }
          price
          content
          category
          slug
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      course: data.course,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        courses {
          slug
        }
      }
    `,
  });
  return {
    paths: data.courses.map((course: { slug: string }) => ({
      params: { slug: course.slug },
    })),
    fallback: true,
  };
};
