import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex flex-col"
          >
            <span
              className={cn(
                'font-display text-lg md:text-xl font-bold transition-colors',
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              )}
            >
              Panorama Inn
            </span>
            <span
              className={cn(
                'text-xs font-body transition-colors',
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              )}
            >
              Hotel · Málaga, Santander
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  'font-body text-sm font-medium transition-colors relative group',
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
                    isScrolled ? 'bg-primary' : 'bg-primary-foreground'
                  )}
                />
              </a>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div
            className={cn(
              'hidden xl:flex items-center gap-4 text-sm',
              isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
            )}
          >
            <a
              href="tel:+573133387951"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+57 313 338 7951</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 transition-colors',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 bg-background/95 backdrop-blur-md rounded-lg p-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-body text-foreground hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+573133387951"
              className="flex items-center gap-2 text-primary py-2 mt-2 border-t border-border"
            >
              <Phone className="w-4 h-4" />
              <span>+57 313 338 7951</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
