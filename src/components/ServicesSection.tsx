import {
  Wifi,
  Tv,
  ArrowUpFromLine,
  Droplets,
  Coffee,
  Laptop,
  Car,
  Presentation,
  Wine,
  UtensilsCrossed,
  Waves,
  Heart,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const includedServices = [
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Tv, label: 'Televisión' },
  { icon: ArrowUpFromLine, label: 'Ascensor' },
  { icon: Droplets, label: 'Agua caliente' },
  { icon: Coffee, label: 'Estación de café' },
  { icon: Laptop, label: 'Coworking' },
  { icon: Car, label: 'Parqueadero' },
];

const additionalServices = [
  { icon: Presentation, label: 'Salón de conferencias' },
  { icon: Wine, label: 'Bar' },
  { icon: UtensilsCrossed, label: 'Restaurante' },
  { icon: Waves, label: 'Jacuzzi' },
  { icon: Heart, label: 'Decoración especial' },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              'text-primary font-body font-semibold text-sm uppercase tracking-widest',
              isVisible && 'animate-fade-up'
            )}
          >
            Comodidades
          </span>
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4',
              isVisible && 'animate-fade-up stagger-1'
            )}
          >
            Nuestros Servicios
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Included Services */}
          <div
            className={cn(
              'bg-card rounded-2xl p-8 shadow-card border border-border',
              isVisible && 'animate-slide-right stagger-2'
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">✓</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Incluidos
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {includedServices.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-body text-foreground">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div
            className={cn(
              'bg-gradient-primary rounded-2xl p-8 shadow-card',
              isVisible && 'animate-slide-left stagger-3'
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">+</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Adicionales
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {additionalServices.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-body text-primary-foreground">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
