import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import footerData from '../Components/footerData.json';

const iconMap = {
  Facebook: <Facebook size={20} />,
  Instagram: <Instagram size={20} />,
  Youtube: <Youtube size={20} />
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex justify-center items-center">
              <div className="text-blue-500 font-bold text-xl flex items-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-1" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M9.5 16.5v-9l7 4.5-7 4.5z" />
                </svg>
                RENTCARS
              </div>
            </div>

            <div className="flex justify-center items-start space-x-2">
              <svg className="h-5 w-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p>25566 Hc 1, Glennallen,</p>
                <p>Alaska, 99588, USA</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+603 4784 273 12</span>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>rentcars@gmail.com</span>
            </div>
          </div>

          {/* Dynamic Menus */}
          {footerData.menus.map((menu, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{menu.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {menu.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">Copyright 2023 • Rentcars, All Rights Reserved</p>
            </div>

            <div className="flex space-x-4 items-center">
              <h3 className="font-bold mr-2">Follow Us</h3>
              {footerData.socials.map((social, index) => (
                <a key={index} href={social.url} className="hover:text-gray-400">
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
