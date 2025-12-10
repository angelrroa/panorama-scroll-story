import { Phone, Mail, Globe, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+57 3133387951', href: 'tel:+573133387951' },
  { icon: Mail, label: 'Correo', value: 'panoramainnHotel@gmail.com', href: 'mailto:panoramainnHotel@gmail.com' },
  { icon: Globe, label: 'Web', value: 'hotelpanoramainn.com.co', href: 'https://hotelpanoramainn.com.co/' },
  { icon: Instagram, label: 'Instagram', value: '@hotelpanoramainn', href: 'https://instagram.com/hotelpanoramainn' },
];

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reservar" className="py-20 md:py-28 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4',
              isVisible && 'animate-fade-up'
            )}
          >
            Realiza tu Reserva Ahora
          </h2>
          <p
            className={cn(
              'font-body text-lg text-primary-foreground/80 mb-12',
              isVisible && 'animate-fade-up stagger-1'
            )}
          >
            Los costos están sujetos a temporada. ¡Contáctanos para más información!
          </p>

          {/* Contact Grid */}
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12',
              isVisible && 'animate-fade-up stagger-2'
            )}
          >
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-body text-sm text-primary-foreground/70">{contact.label}</span>
                  <span className="font-body text-sm text-primary-foreground font-medium break-all">
                    {contact.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/573133387951?text=Hola,%20quiero%20hacer%20una%20reserva"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 bg-primary-foreground text-primary font-body font-bold px-10 py-4 rounded-full text-lg shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105',
              isVisible && 'animate-fade-up stagger-3'
            )}
          >
            <Phone className="w-5 h-5" />
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
