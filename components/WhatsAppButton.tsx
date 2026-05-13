'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio-content')) return null;

  return (
    <motion.a
      href="https://wa.me/5519971525530?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20lockers%20da%20Stoom."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors group"
    >
      <MessageCircle className="w-8 h-8 text-white" />

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 10,
        }}
      />
    </motion.a>
  );
}