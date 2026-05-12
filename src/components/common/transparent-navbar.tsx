import { Link } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import logoImage from '/src/assets/Asset19.svg';

interface NavbarProps {
  delayAnimation?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ delayAnimation = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  // Define navigation links array
  const navLinks = [
    { to: "/about", text: "ABOUT" },
    { to: "/fusion-pods", text: "FUSION PODS" },
    { to: "/surge-care", text: "SURGE CARE" },
    { to: "/success-stories", text: "SUCCESS STORIES" },
    { to: "/careers", text: "CAREERS" },
    { to: "/contact", text: "CONTACT US" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  // Page load animation effect
  useEffect(() => {
    const baseDelay = delayAnimation ? 3200 : 300; // Wait for loader if delayed
    
    // Start animation after component mounts
    const initialTimer = setTimeout(() => {
      setIsLoaded(true);
    }, baseDelay);

    // End initial animation phase
    const endAnimationTimer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, baseDelay + 1000); // End after animation completes

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(endAnimationTimer);
    };
  }, [delayAnimation]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full h-16 md:h-16 lg:h-20 xl:h-20 2xl:h-25 z-50
        transition-all duration-1000 ease-out
        ${showInitialAnimation 
          ? (isLoaded ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-full opacity-0 blur-md') 
          : (showNavbar ? 'translate-y-0' : '-translate-y-full')
        }`}
      style={{
        background: showNavbar && scrollY > 50
          ? 'linear-gradient(105deg, #ec3f24 55%, #7300bf 78%, #0a0a90 110%)'
          : 'transparent',
        backdropFilter: isLoaded && showInitialAnimation ? 'blur(8px)' : 'blur(0px)',
        WebkitBackdropFilter: isLoaded && showInitialAnimation ? 'blur(8px)' : 'blur(0px)'
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo - Added responsive margin */}
        <div className="flex items-center ml-3 sm:ml-4 md:ml-4 lg:ml-8 lg:mt-1 md:mt-5">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={logoImage}
              alt="Cloud Surge"
              className="h-6 md:h-11 lg:h-12 xl:h-12 2xl:h-14 w-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* Navigation Links and Menu Button */}
        <div className="flex items-center md:gap-0">
          {/* Desktop Navigation - Using navLinks array */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 mr-0 lg:mr-4 xl:mr-6 2xl:mr-8 md:mt-5 lg:mt-1 text-white">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                className="hover:text-gray-300 px-1 lg:px-2 py-1 text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base"
              >
                {link.text}
              </Link>
            ))}
          </div>
            <a
              href="https://outlook.office.com/book/FreeScaleUp@cloudsurge.uk/s/Abz0MDpi3kuyMsftsPEmMQ2?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-1.5 sm:px-2 md:px-2 lg:px-3 xl:px-3 2xl:px-4 py-0.5 sm:py-1 md:py-1 lg:py-1.5 xl:py-1.5 2xl:py-2 rounded-full text-[9px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-lg flex items-center gap-0.5 sm:gap-1 md:gap-1 lg:gap-1.5 xl:gap-1.5 2xl:gap-2 hover:bg-white/10 transition whitespace-nowrap flex-shrink-0 mr-1 sm:mr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-[#fff] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Schedule a Consultation
            </a>
          {/* Menu Button - Added responsive margin */}
          <button
            className="text-white z-50 p-2 mr-1 sm:mr-0 sm:hidden"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMenuOpen(prev => !prev);
              }
            }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay - Improved spacing */}
        <div
          className={`md:hidden fixed inset-0 transition-all duration-300 transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } h-screen z-40`}
          style={{
            background: 'linear-gradient(105deg, #ec3f24 55%, #7300bf 78%, #0a0a90 110%)'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white pt-16 space-y-5">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                className="text-xl py-2 w-full text-center" 
                onClick={closeMobileMenu}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;