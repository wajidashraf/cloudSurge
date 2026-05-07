import { useRef } from 'react';
import type { FC } from 'react';
import logo from '@/assets/CS_red.svg';

interface FooterSectionProps {}

export const FooterSection: FC<FooterSectionProps> = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <footer
      ref={ref}
      className="w-full bg-[#D9D9D9] text-[#5D5D5D] py-4 md:py-12 relative overflow-hidden max-h-[70vh] md:max-h-none"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:ml-20 2xl:grid-cols-3 gap-4 md:gap-8 px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
        {/* Logo & Description */}
        <div className="text-left order-1 md:order-none">
          <img
            src={logo}
            alt="Cloud Surge"
            className="h-10 md:h-20 mb-6 md:mb-6"
          />
          <p className="text-[10px] md:text-sm md:text-gray-500 mb-2 md:mb-6 leading-tight">
            Cloud Surge Solutions Ltd trading as Cloud Surge is a company registered in England and Wales: company number 1442129.
          </p>
          <div className="hidden md:block">
            <p className="font-bold text-sm md:text-xl mb-1 md:mb-2">0121 816 1121</p>
            <a
              href="mailto:info@cloudsurge.uk"
              className="font-bold text-sm md:text-4xl hover:text-[#ef4123] transition-colors duration-300 cursor-pointer"
            >
              info@cloudsurge.uk
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:mt-0 order-2 md:order-none">
          <h3 className="text-lg md:text-3xl font-semibold mb-0 md:mb-4 text-left text-[#5D5D5D]">
            Stay connected
          </h3>
          <p className="text-xs md:text-sm mb-2 md:mb-4 text-left leading-tight">
            Join our newsletter and stay updated on the latest trends in digital design
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pr-10 md:pr-12 px-2 md:px-4 py-1.5 md:py-2 border-b-2 border-[#ef4123] focus:outline-none text-xs md:text-sm bg-transparent transition-all duration-300 hover:border-[#c0311a] focus:border-[#c0311a]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/3 h-7 md:h-9 transform -translate-y-1/2 px-2 md:px-3 bg-[#ef4123] text-white rounded-full text-xs"
            >
              ▶︎
            </button>
          </form>
        </div>

        {/* Links & Contact */}
        <div className="mt-4 md:mt-0 md:ml-20 lg:ml-24 xl:ml-32 2xl:ml-40 order-3 md:order-none">
          <div className="grid grid-cols-2 gap-3 md:block">
            <ul className="space-y-1 text-left text-[11px] md:text-lg">
              {[
                { name: 'About', url: '/about' },
                { name: 'Fusion Pods', url: '/fusion-pods' },
                { name: 'Success Stories', url: '/success-stories' },
                { name: 'Careers', url: '/careers' },
                { name: 'Contacts', url: '/contact' },
                { name: 'Terms Of Service', url: '/terms-of-service', hideOnMobile: true },
                { name: 'Privacy Notice', url: '/privacy-notice', hideOnMobile: true },
              ].map((link) => (
                <li key={link.name} className={link.hideOnMobile ? 'hidden md:block' : ''}>
                  <a
                    href={link.url}
                    className="block relative text-[11px] md:text-lg text-[#ef4123] hover:font-bold group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#c0311a] opacity-50 group-hover:w-full transition-all duration-600 delay-100 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-end text-[11px] md:text-base text-left space-y-1 md:mt-4 md:hidden">
              <p className="font-bold text-sm">0121 816 1121</p>
              <a
                href="mailto:info@cloudsurge.uk"
                className="font-bold text-base hover:text-[#ef4123] transition-colors duration-300 cursor-pointer"
              >
                info@cloudsurge.uk
              </a>
              <a
                href="/terms-of-service"
                className="block text-[11px] text-[#ef4123] hover:font-bold"
              >
                Terms Of Service
              </a>
              <a
                href="/privacy-notice"
                className="block text-[11px] text-[#ef4123] hover:font-bold"
              >
                Privacy Notice
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/cloud-surge"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#ef4123] hover:text-[#c0311a]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.29h4.56V23H.22zM8.35 8.29h4.37v2.01h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.5 3.05 5.5 7.01V23h-4.75v-6.53c0-1.56-.03-3.57-2.17-3.57-2.17 0-2.5 1.69-2.5 3.44V23H8.35z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cloudsurgeuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#ef4123] hover:text-[#c0311a]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="space-y-1 text-left">
                <li>
                  <a
                    href="https://www.linkedin.com/company/cloud-surge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative text-lg text-[#ef4123] hover:font-bold group"
                  >
                    LinkedIn
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#c0311a] opacity-50 group-hover:w-full transition-all duration-600 delay-100 ease-out" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cloudsurgeuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative text-lg text-[#ef4123] hover:font-bold group"
                  >
                    Instagram
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#c0311a] opacity-50 group-hover:w-full transition-all duration-600 delay-100 ease-out" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
