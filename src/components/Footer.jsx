import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#191e2c] text-gray-400 py-6 px-4 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left text-sm font-semibold">
        © {new Date().getFullYear()} CryptoDash. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-xl justify-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4 transition"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4 transition"><FaFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4 transition"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4 transition"><FaGithub /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 