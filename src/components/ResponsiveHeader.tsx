import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface ResponsiveHeaderProps {
  logo: React.ReactNode;
  menu: React.ReactNode;
  cta: React.ReactNode;
}

export function ResponsiveHeader({ logo, menu, cta }: ResponsiveHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between w-full gap-4">
        {logo}
        {menu}
        {cta}
      </div>

      {/* Mobile/Tablet Header */}
      <div className="flex lg:hidden items-center justify-between w-full gap-4">
        {logo}
        <div className="flex items-center gap-3">
          {cta}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[80px] right-0 bottom-0 w-[280px] bg-[#0A0A0F] border-l border-white/10 z-[70] lg:hidden">
            <nav className="px-6 py-8" onClick={() => setMobileMenuOpen(false)}>
              {menu}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
