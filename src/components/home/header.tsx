import Link from 'next/link';
import React from 'react';

type Props = {};

function header({}: Props) {
  return (
    <header className='flex justify-between w-full mb-10'>
      <Link href='/'>
        <h1 className='font-bold text-xl text-white'>My Next Login</h1>
      </Link>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/auth/login'>
              <p className='font-bold text-xl text-white'>Login</p>
            </Link>
          </li>
          <li>
            <Link href='/register' className='font-bold text-xl text-white'>
              Register
            </Link>
          </li>
          <li>
            <Link href='/dashboard' className='font-bold text-xl text-white'>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
