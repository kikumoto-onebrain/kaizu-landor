'use client';

import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/stoom-secundario.svg"
              alt="Stoom"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-highlight transition-all hover:scale-110"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 font-roboto text-sm text-center">
            © 2026 Stoom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}