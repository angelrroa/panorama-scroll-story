import { Bed, Lamp, Lock, Sparkles, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import roomImage from '@/assets/room-matrimonial.jpg';

const roomFeatures = [
  { icon: Bed, label: 'Cama confortable' },
  { icon: Lamp, label: 'Iluminación suave' },
  { icon: Lock, label: 'Clóset privado' },
  { icon: Sparkles, label: 'Decoración clásica' },
  { icon: Users, label: 'Ideal para parejas' },
];

export function RoomSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="habitaciones" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={cn(
              'relative',
              isVisible && 'animate-slide-right'
            )}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={roomImage}
                alt="Habitación matrimonial"
                className="w-full h-auto object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-primary-foreground/30 rounded-xl pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-glow">
              <span className="font-display font-bold">Habitación Premium</span>
            </div>
          </div>

          {/* Content */}
          <div className={cn(isVisible && 'animate-slide-left stagger-1')}>
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
              Alojamiento
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Habitación Matrimonial
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestras habitaciones matrimoniales ofrecen un ambiente cálido y acogedor, con una cama 
              confortable, decoración clásica y detalles que invitan al descanso. Cada espacio está 
              equipado con baño privado, iluminación suave, clóset y mesa de noche, creando una estadía 
              práctica y relajante. Su diseño luminoso y armonioso brinda el entorno ideal para parejas 
              que buscan comodidad y tranquilidad durante su visita a Málaga, Santander.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {roomFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-foreground"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
