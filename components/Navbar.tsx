import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { Theme, ThemeContext } from '../pages/_app';

const links = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
  { title: 'blog', path: '/blog' },
  { title: 'contact', path: '/contact' },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();

  const isDarkMode = theme === 'dark' ? true : false;

  const toggleDarkMode = () => {
    if (window !== undefined) {
      if (theme === 'dark') {
        window.localStorage.setItem('color-theme', Theme.LIGHT);
        document.documentElement.classList.remove('dark');
        setTheme(Theme.LIGHT);
        return;
      }

      window.localStorage.setItem('color-theme', Theme.DARK);
      document.documentElement.classList.add('dark');
      setTheme(Theme.DARK);
      return;
    }
  };

  if (true) {
    return (
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0895 89.5C17.7939 89.5 13.4 84.9899 13.368 77.8L21.1711 77.8C21.1036 78.1932 21.1211 80.442 24.2325 81.4681L25.9325 81.4706C27.1092 81.2788 28.8815 80.3113 29 77.8V36H37V77.8C37 77.8 36.9083 79.7967 36.503 80.7692C36.0977 81.7416 35.8999 82.3554 35.8999 82.3554C35.8999 82.3554 33.6027 88.7424 26.0637 89.5H24.0895Z"
                fill="#EEF1FD"
              />
              <path
                d="M13.308 93.1827H74L73.9102 97.4345H13.308V93.1827Z"
                fill="#849DFF"
              />
              <path
                d="M48.6408 82.7045C44.5437 81.1354 42.6137 78.2689 41.9576 74.4409L42 36H50L49.8409 72.9596C49.8409 72.9596 49.8511 75.3262 51.8351 75.3333C53.819 75.3404 54 72.9596 54 72.9596V36H62L61.9183 72.9596C61.9183 72.9596 62.0599 75.3333 63.9022 75.3333C65.7445 75.3333 66.0298 72.9596 66.0298 72.9596L66 36H74L73.9709 73.1084C73.8258 75.6456 73.4879 76.9004 72.3079 78.7621C69.9188 81.9583 67.7108 83.1145 63.9022 83.3755C61.038 83.1145 59.669 82.6067 57.8759 81.2923C55.936 82.8488 52.6798 83.9831 48.6408 82.7045Z"
                fill="#EEF1FD"
              />
              <path
                d="M37.0048 26.4761H36.7948C33.6911 26.3798 32.2554 25.972 30.7125 24.0614C29.9957 22.9958 29.7632 22.3561 29.6956 21.1286C29.8168 19.2264 30.2781 18.2388 31.3388 17.1588C32.6978 16.1257 33.4556 15.8065 34.9361 15.6089L34.6979 15.086C33.9015 12.4214 33.9307 10.9472 34.9361 8.35719C36.1345 6.30637 36.9542 5.33851 38.8954 4.20091C41.2772 3.01387 42.7479 2.83913 45.5315 3.11236C47.1459 3.52509 48.0482 3.9649 49.6528 4.99258C50.7528 5.92957 51.2429 6.5007 51.958 7.57763L52.2858 7.402C53.1633 7.06829 53.6696 6.95185 54.6124 6.8728C56.1335 7.05796 56.9027 7.35569 58.0702 8.35719C59.1151 9.55582 59.4327 10.3344 59.413 11.9565V12.5569H60.6086C62.1836 12.5569 62.2262 12.4765 63.7693 12.8182C67.1674 14.0307 68.2648 15.5153 69.0094 18.9952C69.754 22.4751 68.033 24.1132 65.8318 25.41C63.6306 26.7068 63.2145 26.4761 60.6086 26.4761"
                stroke="#849DFF"
                strokeWidth="3.25"
              />
              <path
                d="M37.7621 27.0377V26.2522C37.7621 25.9654 37.8913 25.7035 38.1496 25.4666L43.495 20.4165C43.5395 20.3791 43.593 20.3604 43.6553 20.3604C43.7266 20.3604 43.789 20.3978 43.8424 20.4727C43.8959 20.5475 43.9226 20.641 43.9226 20.7532V23.7832C43.9226 24.095 43.7801 24.3693 43.495 24.6062L41.1564 26.6449L43.495 28.7024C43.5841 28.7772 43.6464 28.8333 43.6821 28.8707C43.7266 28.9081 43.7756 28.9892 43.8291 29.1139C43.8914 29.2261 43.9226 29.357 43.9226 29.5066V32.5367C43.9226 32.6489 43.8959 32.7424 43.8424 32.8172C43.789 32.8921 43.7266 32.9295 43.6553 32.9295C43.593 32.9295 43.5395 32.9108 43.495 32.8733L38.1496 27.8233C37.8913 27.5864 37.7621 27.3245 37.7621 27.0377Z"
                fill="#849DFF"
              />
              <path
                d="M50.0864 18.49H51.8771C51.9573 18.49 52.0241 18.5337 52.0776 18.621C52.1399 18.6958 52.1711 18.7768 52.1711 18.8641C52.1711 18.9389 52.1622 19.0075 52.1444 19.0699L47.6276 34.2013C47.5207 34.5754 47.3247 34.7624 47.0396 34.7624H45.289C45.2088 34.7624 45.1375 34.7188 45.0752 34.6315C45.0217 34.5567 44.995 34.4757 44.995 34.3884C44.995 34.3135 45.0039 34.245 45.0217 34.1826L49.4985 19.0512C49.6143 18.6771 49.8103 18.49 50.0864 18.49Z"
                fill="#849DFF"
              />
              <path
                d="M59.3964 26.2522V27.0377C59.3964 27.3245 59.2672 27.5864 59.0089 27.8233L53.6635 32.8733C53.619 32.9108 53.5611 32.9295 53.4898 32.9295C53.4275 32.9295 53.3696 32.8921 53.3161 32.8172C53.2626 32.7424 53.2359 32.6489 53.2359 32.5367V29.5066C53.2359 29.357 53.2626 29.2261 53.3161 29.1139C53.3785 28.9892 53.4275 28.9081 53.4631 28.8707C53.5076 28.8333 53.5745 28.7772 53.6635 28.7024L56.0021 26.6449L53.6635 24.6062C53.3785 24.3693 53.2359 24.095 53.2359 23.7832V20.7532C53.2359 20.641 53.2626 20.5475 53.3161 20.4727C53.3696 20.3978 53.4275 20.3604 53.4898 20.3604C53.5611 20.3604 53.619 20.3791 53.6635 20.4165L59.0089 25.4666C59.2672 25.7035 59.3964 25.9654 59.3964 26.2522Z"
                fill="#849DFF"
              />
            </svg>
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Josh Wheeler
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              navbarOpen ? '' : 'hidden'
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {links.map((link) => (
                <li
                  key={link.title}
                  className="flex items-center justify-center"
                >
                  <Link href={`${link.path}`}>
                    {router.pathname === link.path ? (
                      <a
                        className="w-full text-center cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        {link.title.toUpperCase()}
                      </a>
                    ) : (
                      <a className="w-full text-center cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        {link.title.toUpperCase()}
                      </a>
                    )}
                  </Link>
                </li>
              ))}
              <button
                id="theme-toggle"
                type="button"
                className="flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                onClick={() => toggleDarkMode()}
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className={`${isDarkMode ? 'hidden' : ''} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className={`${isDarkMode ? '' : 'hidden'} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
