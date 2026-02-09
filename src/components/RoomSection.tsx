import { useState } from 'react';
import { Bed, Lamp, Lock, Sparkles, Users, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import roomMatrimonial from '@/assets/room-matrimonial.jpg';
import roomSencilla from '@/assets/room-sencilla.jpg';
import roomMultiple from '@/assets/room-multiple.jpg';

const rooms = [
  {
    title: 'Habitación Matrimonial',
    badge: 'Premium',
    image: roomMatrimonial,
    alt: 'Habitación matrimonial',
    description:
      'Nuestras habitaciones matrimoniales ofrecen un ambiente cálido y acogedor, con una cama confortable, decoración clásica y detalles que invitan al descanso. Cada espacio está equipado con baño privado, iluminación suave, clóset y mesa de noche, creando una estadía práctica y relajante.',
    features: [
      { icon: Bed, label: 'Cama confortable' },
      { icon: Lamp, label: 'Iluminación suave' },
      { icon: Lock, label: 'Clóset privado' },
      { icon: Sparkles, label: 'Decoración clásica' },
      { icon: Users, label: 'Ideal para parejas' },
    ],
  },
  {
    title: 'Habitación Sencilla',
    badge: 'Confort',
    image: roomSencilla,
    alt: 'Habitación sencilla',
    description:
      'La habitación sencilla es perfecta para viajeros individuales que buscan comodidad y tranquilidad. Con una cama cómoda, baño privado, iluminación cálida y un diseño acogedor, es el espacio ideal para descansar después de explorar Málaga, Santander.',
    features: [
      { icon: Bed, label: 'Cama cómoda' },
      { icon: Lamp, label: 'Iluminación cálida' },
      { icon: Lock, label: 'Baño privado' },
      { icon: User, label: 'Ideal para uno' },
    ],
  },
  {
    title: 'Acomodación Múltiple',
    badge: 'Familiar',
    image: roomMultiple,
    alt: 'Acomodación múltiple',
    description:
      'Nuestra acomodación múltiple cuenta con dos camas individuales, ideal para amigos, familias o compañeros de viaje. Un espacio amplio y cómodo con decoración regional, baño privado y todo lo necesario para una estadía agradable en el corazón de Santander.',
    features: [
      { icon: Bed, label: 'Dos camas individuales' },
      { icon: Lamp, label: 'Decoración regional' },
      { icon: Lock, label: 'Baño privado' },
      { icon: Users, label: 'Ideal para grupos' },
    ],
  },
];

export function RoomSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? rooms.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === rooms.length - 1 ? 0 : c + 1));

  const room = rooms[current];

  return (
    <section id="habitaciones" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={cn('text-primary font-body font-semibold text-sm uppercase tracking-widest', isVisible && 'animate-fade-up')}>
            Alojamiento
          </span>
          <h2 className={cn('font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4', isVisible && 'animate-fade-up stagger-1')}>
            Nuestras Habitaciones
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image with navigation */}
          <div className={cn('relative', isVisible && 'animate-slide-right')}>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                key={room.image}
                src={room.image}
                alt={room.alt}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute inset-4 border-2 border-primary-foreground/30 rounded-xl pointer-events-none" />
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/60 hover:bg-foreground/80 text-primary-foreground rounded-full p-2 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/60 hover:bg-foreground/80 text-primary-foreground rounded-full p-2 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-glow">
              <span className="font-display font-bold">{room.badge}</span>
            </div>
          </div>

          {/* Content */}
          <div key={current} className="animate-fade-in">
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {room.title}
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {room.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {room.features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 text-foreground">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {rooms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all',
                    i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Habitación ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
