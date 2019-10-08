import Link from 'next/link';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/'>
        <img src='/static/img/logo.png' alt='MGP logo' />
      </Link>
    </div>
  );
};

export default Logo;
