import { Container } from '@/components/container';
import React from 'react';
import Markdown from 'react-markdown';
import { gql } from '@apollo/client';
import hygraph from '@/lib/hygraph';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

interface BlogProps {
  blog: {
    title: string;
    date: string;
    description: string;
    slug: string;
    content: string;
    image: { url: string };
    blogCategory: string;
    author: string;
    id: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = await hygraph.query({
    query: gql`
      query ($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          title
          date
          description
          slug
          content
          author
          metaTitle
          metaDescription
          metaDescription
          image {
            url
          }
          blogCategory
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      blog: data.blog,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        blogs {
          slug
        }
      }
    `,
  });
  return {
    paths: data.blogs.map((blog: { slug: string }) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: true,
  };
};

const IndexPage = ({ blog }: BlogProps) => {
  const title = `${blog?.title} | Linkdedin For Her`;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={blog?.description} />
        <meta name='keywords' content={blog?.metaKeywords} />
        <meta name='author' content={blog?.author} />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={blog?.metaTitle} />
        <meta property='og:description' content={blog?.metaDescription} />
        <meta property='og:image' content={blog?.image.url} />
        <meta
          property='og:url'
          content={`https://linkedinforher.com/blogs/${blog?.slug}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content='Linkedin For Her' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@linkedinforher' />
        <meta name='twitter:creator' content='@linkedinforher' />
        <meta name='twitter:title' content={blog?.metaTitle} />
        <meta name='twitter:description' content={blog?.metaDescription} />
        <meta name='twitter:image' content={blog?.image.url} />
        <meta name='twitter:image:alt' content={blog?.title} />
        <meta name='twitter:label1' content='Written by' />
        <meta name='twitter:data1' content={blog?.author} />
        <meta name='twitter:label2' content='Filed under' />
        <meta name='twitter:data2' content={blog?.blogCategory} />
      </Head>
      <Container>
        <div className='relative isolate overflow-hidden py-24 sm:py-32'>
          <div
            className='absolute -top-80 left-[max(10rem,45%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56'
            aria-hidden='true'
          >
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.6%, 100%  17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto lg:mx-0'>
              <p className='text-center font-body text-lg font-semibold leading-8 tracking-tight text-teal-600'>
                {convertToTitleCase(blog?.blogCategory)}
              </p>
              <h1 className='mx-auto mt-2 max-w-4xl font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl'>
                {blog?.title}
              </h1>
              <div className='py-10'>
                <Image
                  src={blog?.image.url}
                  alt={blog?.title}
                  width={1920}
                  height={1080}
                  className='rounded-lg'
                />
              </div>
              <div className='prose mx-auto font-body text-zinc-800 dark:text-zinc-200'>
                <Markdown>{blog?.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default IndexPage;
