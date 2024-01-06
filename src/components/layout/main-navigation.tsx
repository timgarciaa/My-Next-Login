import Link from 'next/link';
import React from 'react';

type Props = {};

function MainNavigation({}: Props) {
  return (
    <header>
      <Link href='/'>My Next Login</Link>

      <nav>
        <ul>
          <li>
            <Link href='/auth'>Login</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <button type='button'>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
