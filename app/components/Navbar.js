import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-center gap-4">
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/services">Services</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;