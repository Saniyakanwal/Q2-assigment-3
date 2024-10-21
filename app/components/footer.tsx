// src/components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center py-4">
      <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
      <div className="mt-2">
        <Link href="#" className="text-sm text-gray-400 hover:text-white mx-2">
          Terms of Service
        </Link>
        <Link href="#" className="text-sm text-gray-400 hover:text-white mx-2">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
