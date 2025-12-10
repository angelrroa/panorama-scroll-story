import { MapPin, Mountain, Building2, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-hotel.jpg';

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/80 via-transparent to-hero-overlay/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-body text-primary-foreground/90">
              Portfolio / Hotel Panorama Inn
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Hotel Panorama Inn
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-2 text-primary-foreground/90">
              Málaga, Santander
            </span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up stagger-2 font-body text-xl md:text-2xl text-primary-foreground/90 mb-8 italic">
            "Tu refugio perfecto entre las montañas de Santander."
          </p>

          {/* Location */}
          <div className="animate-fade-up stagger-3 flex flex-wrap items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
              <span className="font-body text-sm md:text-base">
                Cra. 8 #13-37, Segundo Piso
              </span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/50" />
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mountain className="w-5 h-5" />
              <span className="font-body text-sm md:text-base">
                Centro Comercial y Empresarial Panorama
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up stagger-4">
            <a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#reservar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg shadow-glow hover:shadow-[0_0_60px_hsl(8_78%_44%_/_0.5)] transition-all duration-300 hover:scale-105"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
