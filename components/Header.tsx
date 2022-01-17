import React from 'react';

interface HeaderProps {
  title: string;
  blogTitle?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1 className="text-4xl text-blue-700 font-bold py-6">{title}</h1>;
};
