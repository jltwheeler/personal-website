import Link from 'next/link';
import { Accent } from '../components';

export const Hero = () => {
  return (
    <section className="dark:bg-gray-900 flex flex-col py-12 sm:py-48">
      <div className="flex justify-around items-center flex-col sm:flex-row px-16 md:px-32 lg:px-48">
        <div className="w-full sm:w-1/3">
          <h2 className="text-2xl md:text-4xl dark:text-white">
            Hello, world. I&apos;m
          </h2>
          <h1 className="text-4xl md:text-6xl dark:text-white">Josh Wheeler</h1>
        </div>
        <div className="w-full pt-6 sm:pt-0 sm:w-2/3 sm:pl-24">
          <h3 className="text-lg md:text-xl dark:text-blue-400 text-blue-600 italic">
            A software engineer specialising in full stack web development.
            Primarily working with <Accent>Node.js</Accent>,{' '}
            <Accent>AWS</Accent>, <Accent>React.JS</Accent>,{' '}
            <Accent>TypeScript</Accent> and <Accent>PostgreSQL</Accent>.
          </h3>
        </div>
      </div>
      <div className="sm:hidden flex justify-center items-center pt-8">
        <Link href="/blog" passHref>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Read Blog
          </button>
        </Link>
      </div>
    </section>
  );
};
