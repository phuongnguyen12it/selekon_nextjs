import React from 'react';
import ThemToggle from '../themes/ThemToggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-center items-center'>
        <Link className='mx-5 px-2 py-2 hover:text-gray-900 hover:dark:text-blue-700'  rel="stylesheet" href="/">Home</Link>
        <Link className='mx-5 px-2 py-2 hover:text-gray-900 hover:dark:text-blue-700'  rel='stylesheet' href={'/home'}>I18 Demo</Link>
        <Link className='mx-5 px-2 py-2 hover:text-gray-900 hover:dark:text-blue-700'  rel="stylesheet" href={"/redux-demo"}>Redux demo</Link>
        <p>HEADER</p>
        <ThemToggle />
    </header>
  );
};

export default Header;