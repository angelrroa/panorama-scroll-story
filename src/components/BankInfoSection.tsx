import { Building, CreditCard, Key } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const bankAccounts = [
  {
    title: 'Reserva Ferias y Fiestas',
    bank: 'Bancolombia',
    accountType: 'Cuenta de ahorros',
    accountNumber: '31282690830',
    key: null,
  },
  {
    title: 'Reserva Temporada Regular',
    bank: 'Bancolombia',
    accountType: 'Cuenta de ahorros',
    accountNumber: '31286044049',
    key: 'luzmarcelacasasj@yahoo.com',
  },
];

export function BankInfoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              'text-primary font-body font-semibold text-sm uppercase tracking-widest',
              isVisible && 'animate-fade-up'
            )}
          >
            Métodos de Pago
          </span>
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4',
              isVisible && 'animate-fade-up stagger-1'
            )}
          >
            Información para Transferencias
          </h2>
        </div>

        {/* Bank Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bankAccounts.map((account, index) => (
            <div
              key={account.title}
              className={cn(
                'bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-[0_8px_40px_-8px_hsl(8_78%_44%_/_0.2)] transition-all duration-300',
                isVisible && 'animate-scale-in',
                index === 0 ? 'stagger-2' : 'stagger-3'
              )}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {account.title}
                  </h3>
                  <span className="font-body text-sm text-muted-foreground">
                    {account.bank}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <span className="block text-xs text-muted-foreground font-body">
                      {account.accountType}
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      {account.accountNumber}
                    </span>
                  </div>
                </div>

                {account.key && (
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Key className="w-5 h-5 text-primary" />
                    <div>
                      <span className="block text-xs text-muted-foreground font-body">
                        Llave
                      </span>
                      <span className="font-body font-semibold text-foreground text-sm break-all">
                        {account.key}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
