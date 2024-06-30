import Head from 'next/head';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { SimpleLayout } from '@/components/simpleLayout';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

interface talks {
  id: string;
  title: string;
  event: string;
  description: string;
  slug: string;
  link: string;
  image: {
    url: string;
  };
  type: string;
  content: string;
  callToAction: string;
}

function SpeakingSection({
  children,
  title,
  ...props
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Section title={title} {...props}>
      <div className='space-y-16'>{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as='article'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

const Talks = ({ talks }: { talks: talks[] }) => {
  const uniqueTypes = [...new Set(talks.map((talk) => talk?.type))];

  const renderSections = () => {
    return uniqueTypes.map((type) => {
      const filteredTalks = talks.filter((talk) => talk?.type === type);

      if (filteredTalks.length === 0) return null;

      return (
        <SpeakingSection
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          key={type}
        >
          {filteredTalks.map((talk) => (
            <Appearance
              key={talk?.id}
              href={talk?.link}
              title={talk?.title}
              description={talk?.description}
              event={talk?.event}
              cta={convertToTitleCase(talk?.callToAction)}
            />
          ))}
        </SpeakingSection>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Talks by Suma Annegowda</title>
        <meta
          name='description'
          content='Inspiring Talks and Engaging Interviews'
        />
      </Head>
      <SimpleLayout
        title='Inspiring Talks and Engaging Interviews'
        intro='I have had the privilege of speaking at events around the world and participating in numerous podcast interviews. One of my favorite ways to share my ideas is live on stage, where the dynamic interaction and immediate feedback create an unmatched communication experience. I also love podcast interviews as they allow me to delve into questions and offer deeper insights beyond just presenting my opinions. Explore my talks and interviews to gain valuable perspectives on empowering women in their careers and beyond.'
      >
        <div className='space-y-20'>{renderSections()}</div>
      </SimpleLayout>
    </>
  );
};

export default Talks;

export const getStaticProps = async () => {
  const { data } = await hygraph.query({
    query: gql`
      query {
        talks {
          id
          title
          event
          description
          slug
          link
          image {
            url
          }
          type
          content
          callToAction
        }
      }
    `,
  });

  return {
    props: {
      talks: data.talks,
    },
    revalidate: 180,
  };
};
