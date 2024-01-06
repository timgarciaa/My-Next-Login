import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <nav>
        <Link href="/">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
