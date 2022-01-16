import React, { useContext } from 'react';
import { GitHub, Gmail, LinkedIn, Logo } from '../icons';
import { ThemeContext } from '../pages/_app';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const now = new Date();

  return (
    <footer className="dark:bg-gray-900 dark:text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo theme={theme} />
        <a className="flex title-font font-medium items-center md:justify-start justify-center dark:text-white">
          <span className="ml-3 text-xl">joshwheeler.tech</span>
        </a>
        <p className="text-sm dark:text-gray-500 text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; {now.getFullYear()} Josh Wheeler
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-600 dark:text-gray-500">
            <Gmail />
          </a>
          <a className="ml-3 text-gray-600 dark:text-gray-500">
            <GitHub />
          </a>
          <a className="ml-3 text-gray-600 dark:text-gray-500">
            <LinkedIn />
          </a>
        </span>
      </div>
    </footer>
  );
};
