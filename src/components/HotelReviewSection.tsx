import { Heart, Users, TreePine, Moon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const features = [
  { icon: Heart, label: 'Atención cálida' },
  { icon: Users, label: 'Servicio personalizado' },
  { icon: TreePine, label: 'Entorno natural' },
  { icon: Moon, label: 'Descanso perfecto' },
];

export function HotelReviewSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div
            className={cn(
              'mb-6',
              isVisible && 'animate-fade-up'
            )}
          >
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
              Bienvenido
            </span>
          </div>
          
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8',
              isVisible && 'animate-fade-up stagger-1'
            )}
          >
            Descubre el Hotel Panorama Inn
          </h2>

          {/* Main Text */}
          <p
            className={cn(
              'font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12',
              isVisible && 'animate-fade-up stagger-2'
            )}
          >
            El Hotel Panorama Inn es el lugar ideal para disfrutar de la esencia de Málaga, Santander. 
            Rodeado de paisajes únicos, ofrece habitaciones cómodas, modernas y perfectas para descansar 
            después de explorar la región. Su atención cálida y personalizada asegura una experiencia 
            inolvidable, mientras que su ubicación estratégica permite acceder fácilmente a los principales 
            atractivos naturales y culturales del municipio. Una opción perfecta para viajeros que buscan 
            confort, vistas espectaculares y un ambiente relajante en el corazón de Santander.
          </p>

          {/* Feature Icons */}
          <div
            className={cn(
              'grid grid-cols-2 md:grid-cols-4 gap-6',
              isVisible && 'animate-fade-up stagger-3'
            )}
          >
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
