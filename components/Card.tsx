import Link from 'next/link';

interface CardProps {
  title: string;
  body: string | string[];
  subtext?: string;
  cta?: string;
  ctaLink?: string;
  wide?: boolean;
  mb?: number;
}

export const Card: React.FC<CardProps> = ({
  cta,
  ctaLink,
  subtext,
  title,
  body,
  wide,
  mb,
}) => (
  <div
    className={`p-4 ${wide ? '' : 'max-w-xs'} ${
      mb ? `mb-${mb}` : ''
    } bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}
  >
    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-blue-600">
      {title}
    </h5>
    <span className="text-gray-600 italic text-sm">{subtext}</span>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {Array.isArray(body)
        ? body.map((line) => (
            <>
              {line}
              <br />
            </>
          ))
        : body}
    </p>
    {cta && ctaLink && (
      <Link href={ctaLink} passHref={true}>
        <a className="no-underline inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
          {cta}
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </Link>
    )}
  </div>
);
