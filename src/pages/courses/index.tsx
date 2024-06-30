import { Container } from '@/components/container';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import CourseComponent from '@/components/course';

interface courseProps {
  courses: {
    id: string;
    title: string;
    price: number;
    category: string;
    image: { url: string };
    slug: string;
  }[];
}

const Courses = ({ courses }: courseProps) => {
  return (
    <Container className=''>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='md:flex md:items-center md:justify-between'>
          <h2 className='py-6 font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-gray-200'>
            Our courses
          </h2>
        </div>
        <CourseComponent courses={courses} />
      </div>
    </Container>
  );
};

export default Courses;

export const getStaticProps = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        courses {
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
      courses: data.courses,
    },
    revalidate: 180,
  };
};
