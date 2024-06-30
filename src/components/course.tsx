import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

interface CourseProps {
  courses: {
    id: string;
    title: string;
    price: number;
    category: string;
    image: { url: string };
    slug: string;
  }[];
}

const CourseComponent = ({ courses }: CourseProps) => {
  return (
    <div>
      <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-6 lg:gap-x-8'>
        {courses.map((course) => (
          <div key={course.id} className='group relative'>
            <div className='aspect-square overflow-hidden rounded-md group-hover:opacity-75'>
              <Image
                src={course.image.url}
                alt={course.title}
                className='aspect-square object-cover object-center'
                width={300}
                height={300}
              />
            </div>
            <h3 className='mt-4 font-heading text-sm text-zinc-700 dark:text-zinc-200'>
              <Link href={`/courses/${course.slug}`}>
                <span className='absolute inset-0' />
                {course.title}
              </Link>
            </h3>
            <p className='mt-1 text-sm text-zinc-500'>
              {convertToTitleCase(course.category)}
            </p>
            <p className='mt-2 max-w-fit rounded-full bg-gray-700 px-3 font-body text-sm font-medium text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900'>
              ₹{course.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseComponent;
