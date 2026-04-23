'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <Image
              src={isScrolled ? '/stoom-primario.svg' : '/stoom-secundario.svg'}
              alt="Stoom"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#solucao"
              className={`font-roboto font-medium transition-colors ${
                isScrolled
                  ? 'text-brand-primary hover:text-brand-highlight'
                  : 'text-white hover:text-brand-highlight'
              }`}
            >
              Solução
            </a>

            <a
              href="#segmentos"
              className={`font-roboto font-medium transition-colors ${
                isScrolled
                  ? 'text-brand-primary hover:text-brand-highlight'
                  : 'text-white hover:text-brand-highlight'
              }`}
            >
              Segmentos
            </a>

            <a
              href="#como-funciona"
              className={`font-roboto font-medium transition-colors ${
                isScrolled
                  ? 'text-brand-primary hover:text-brand-highlight'
                  : 'text-white hover:text-brand-highlight'
              }`}
            >
              Como Funciona
            </a>

            <a
              href="#tecnologia"
              className={`font-roboto font-medium transition-colors ${
                isScrolled
                  ? 'text-brand-primary hover:text-brand-highlight'
                  : 'text-white hover:text-brand-highlight'
              }`}
            >
              Tecnologia
            </a>

            <a
              href="#contato"
              className="px-6 py-3 bg-brand-secondary text-white font-roboto font-medium rounded-sm hover:bg-brand-secondary/90 transition-all hover:scale-105"
            >
              Solicite uma demonstração
            </a>

            <div className={`w-px h-6 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

            <Image
              src="/selo-sites.svg"
              alt="Selo de Qualidade"
              width={80}
              height={40}
              className="h-9 w-auto opacity-90"
            />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#solucao"
                className="block text-brand-primary hover:text-brand-highlight font-roboto font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solução
              </a>

              <a
                href="#segmentos"
                className="block text-brand-primary hover:text-brand-highlight font-roboto font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Segmentos
              </a>

              <a
                href="#como-funciona"
                className="block text-brand-primary hover:text-brand-highlight font-roboto font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como Funciona
              </a>

              <a
                href="#tecnologia"
                className="block text-brand-primary hover:text-brand-highlight font-roboto font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tecnologia
              </a>

              <a
                href="#contato"
                className="block px-6 py-3 bg-brand-secondary text-white text-center font-roboto font-medium rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Demonstração
              </a>

              <div className="flex justify-center pt-2 pb-1">
                <Image
                  src="/selo-sites.svg"
                  alt="Selo de Qualidade"
                  width={100}
                  height={50}
                  className="h-10 w-auto opacity-80"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}