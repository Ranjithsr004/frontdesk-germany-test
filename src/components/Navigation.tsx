import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, label, onClick, isMobile = false  }: NavLinkProps) => (
  <li>
    <a
      href={href}
      className={`${
        isMobile ? "text-black" : "text-white"
      } hover:text-frontdesk-800 font-medium transition-colors px-2 py-1`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </a>
  </li>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-frontdesk-800 font-bold text-xl md:text-2xl">
                FrontDesk<span className="text-frontdesk-600"> Solutions</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <NavLink href="#home" label={t('nav.home')} onClick={handleNavClick} />
              <NavLink href="#about" label={t('nav.about')} onClick={handleNavClick} />
              <NavLink href="#services" label={t('nav.services')} onClick={handleNavClick} />
              <NavLink href="#contact" label={t('nav.contact')} onClick={handleNavClick} />
            </ul>
          </nav>

          {/* Language Selector and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="default">
                  <p>{t('nav.language')}</p>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('de')}>
                  {language === 'de' && '✓ '}Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  {language === 'en' && '✓ '}English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              className="bg-frontdesk-600 hover:bg-frontdesk-700 text-white font-medium"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-frontdesk-800 " />
            ) : (
              <Menu className="h-6 w-6 text-frontdesk-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500  hover:text-gray-800"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-6 text-center">
            <NavLink href="#Heim" label={t('nav.home')} onClick={handleNavClick} isMobile />
            <NavLink href="#about" label={t('nav.about')} onClick={handleNavClick} isMobile />
            <NavLink href="#services" label={t('nav.services')} onClick={handleNavClick} isMobile />
            <NavLink href="#contact" label={t('nav.contact')} onClick={handleNavClick} isMobile />
            <li className="pt-4 flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Languages className="mr-2 h-5 w-5" />
                    {t('nav.language')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('de')}>
                    {language === 'de' && '✓ '}Deutsch
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    {language === 'en' && '✓ '}English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                className="bg-frontdesk-600 hover:bg-frontdesk-700 text-white font-medium w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t('nav.getStarted')}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
