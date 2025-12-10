import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import galleryLobby from '@/assets/gallery-lobby.jpg';
import galleryTerrace from '@/assets/gallery-terrace.jpg';
import galleryRomantic from '@/assets/gallery-romantic.jpg';
import galleryConference from '@/assets/gallery-conference.jpg';

const galleryItems = [
  { src: galleryTerrace, alt: 'Terraza con vista a las montañas', label: 'Terraza Panorámica' },
  { src: galleryLobby, alt: 'Lobby del hotel', label: 'Recepción & Lobby' },
  { src: galleryRomantic, alt: 'Decoración romántica', label: 'Decoración Especial' },
  { src: galleryConference, alt: 'Sala de conferencias', label: 'Sala de Conferencias' },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galeria" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              'text-primary font-body font-semibold text-sm uppercase tracking-widest',
              isVisible && 'animate-fade-up'
            )}
          >
            Explora
          </span>
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4',
              isVisible && 'animate-fade-up stagger-1'
            )}
          >
            Galería de Servicios
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                'group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer',
                isVisible && 'animate-scale-in',
                index === 0 && 'stagger-2',
                index === 1 && 'stagger-3',
                index === 2 && 'stagger-4',
                index === 3 && 'stagger-5'
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  {item.label}
                </h3>
                <div className="w-12 h-1 bg-primary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
