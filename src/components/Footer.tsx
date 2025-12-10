import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Hotel Panorama Inn
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Tu refugio perfecto entre las montañas de Santander. 
              Experiencias inolvidables en el corazón de Málaga.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Ubicación
            </h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm">
                Cra. 8 #13-37, Segundo Piso<br />
                Centro Comercial y Empresarial Panorama<br />
                Málaga, Santander, Colombia
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+573133387951"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-body text-sm">+57 313 338 7951</span>
              </a>
              <a
                href="mailto:panoramainnHotel@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-body text-sm">panoramainnHotel@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/hotelpanoramainn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body text-sm">@hotelpanoramainn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Hotel Panorama Inn. Todos los derechos reservados.
            </p>
            <a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#reservar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-6 py-2 rounded-full text-sm transition-colors"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
