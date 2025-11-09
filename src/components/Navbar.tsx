import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import useStore from '@/store/useStore';

const Navbar = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Always show navbar on non-home pages
    if (location.pathname !== '/') {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show navbar after scrolling past hero section (approximately 100px)
      const isVisible = window.scrollY > 100;
      if (isVisible !== visible) {
        setVisible(isVisible);
      }

      // Update scrolled state for styling changes
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, visible, location.pathname]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our History', href: '#our-history' },
    { name: 'Masses', href: '#masses-timing' },
    { name: 'Events', href: '#events' },
    { name: 'Associations', href: '#associations' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href.startsWith('#')) {
      return location.pathname === '/' && location.hash === href;
    }
    return location.pathname === href;
  };

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      // For hash links, navigate to home first if needed
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        // If already on home page, just scroll to the section
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Add a small delay to ensure mobile menu closes first
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    }
    closeMobileMenu();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav
        className={`mt-4 mx-4 max-w-7xl w-full rounded-lg ${scrolled
            ? 'bg-white/90 shadow-lg backdrop-blur-md'
            : 'bg-white/80 shadow-md backdrop-blur-sm'
          } transition-all duration-300`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center group"
                aria-label="Our Lady of Lourdes Church Home"
              >
                <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-pastel-gold group-hover:via-amber-600 group-hover:to-pastel-gold transition-all duration-500">
                  Our Lady of Lourdes
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.href)
                        ? 'text-pastel-gold bg-pastel-gold/10'
                        : 'text-gray-700 hover:text-pastel-gold hover:bg-gray-100/50'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.href)
                        ? 'text-pastel-gold bg-pastel-gold/10'
                        : 'text-gray-700 hover:text-pastel-gold hover:bg-gray-100/50'
                      }`}
                    onClick={() => handleClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              {/* <Button 
                className="ml-4 bg-gradient-to-r from-pastel-gold to-amber-600 hover:from-amber-600 hover:to-pastel-gold text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => handleClick('#give')}
              >
                <Heart className="w-4 h-4 mr-2" />
                Give Now
              </Button> */}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-pastel-gold hover:bg-gray-100/50 transition-all duration-300"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-5 py-4 rounded-md text-base font-medium transition-all duration-300 ${isActive(item.href)
                          ? 'text-pastel-gold bg-pastel-gold/10'
                          : 'text-gray-700 hover:text-pastel-gold hover:bg-gray-50'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href);
                      }}
                      role="menuitem"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-5 py-4 rounded-md text-base font-medium transition-all duration-300 ${isActive(item.href)
                          ? 'text-pastel-gold bg-pastel-gold/10'
                          : 'text-gray-700 hover:text-pastel-gold hover:bg-gray-50'
                        }`}
                      onClick={() => handleClick(item.href)}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                {/* <div className="px-5 py-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-pastel-gold to-amber-600 hover:from-amber-600 hover:to-pastel-gold text-white shadow-md hover:shadow-lg transition-all duration-300 py-6 text-lg"
                    onClick={() => handleClick('#give')}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Give Now
                  </Button>
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
