import Link from 'next/link';

import { Accent } from '../components';

export const Hero = () => {
  const links = [
    { label: 'about me', route: 'about' },
    { label: 'blog', route: 'blog' },
  ];

  return (
    <section className="dark:bg-gray-900 flex flex-col py-48">
      <div className="flex justify-around px-48">
        <div className="w-1/3">
          <h2 className="text-4xl dark:text-white">Hello, world. I&apos;m</h2>
          <h1 className="text-6xl dark:text-white">Josh Wheeler</h1>
        </div>
        <div className="w-2/3 pl-24">
          <h3 className="text-xl text-blue-600 italic">
            A software engineer specialising in full stack web development.
            Primarily working with Node.js, AWS, React.JS, TypeScript and
            PostgreSQL.
          </h3>
        </div>
      </div>
    </section>
  );
};
