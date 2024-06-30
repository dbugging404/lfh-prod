import { Container } from '@/components/container';

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <Container className='my-16 sm:mt-32'>
      <header className='max-w-2xl'>
        <h1 className='font-heading text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
          {title}
        </h1>
        <p className='mt-6 font-body text-base text-zinc-600 dark:text-zinc-400'>
          {intro}
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>{children}</div>
    </Container>
  );
}
