'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Scale, Eye, TrendingDown } from 'lucide-react';

const problems = [
  { icon: Users, text: 'Portarias sobrecarregadas com volume crescente de encomendas' },
  { icon: Scale, text: 'Dependência de mão de obra para gestão de entregas' },
  { icon: Eye, text: 'Falta de controle e rastreabilidade das operações' },
  { icon: TrendingDown, text: 'Dificuldade para escalar operações logísticas' },
];

export default function Challenge() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.35, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageBlur = useTransform(scrollYProgress, [0, 1], ['2px', '0px']);

  const bgYLeft = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgYRight = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);

  return (
    <section
      id="desafio"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-light relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgYLeft }}
        className="absolute -bottom-24 -left-24 w-[620px] h-[620px] bg-brand-secondary/15 rounded-full blur-[110px] pointer-events-none"
      />

      <motion.div
        style={{ y: bgYRight }}
        className="absolute top-0 right-[-60px] w-[360px] h-[360px] bg-brand-highlight/18 rounded-full blur-[90px] pointer-events-none"
      />

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(76,201,240,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-highlight/10 rounded-full">
                <div className="w-2 h-2 bg-brand-highlight rounded-full" />
                <span className="text-brand-primary font-roboto font-medium">O Desafio</span>
                <div className="w-2 h-2 bg-brand-highlight rounded-full" />
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-4xl lg:text-5xl font-outfit font-bold text-brand-primary leading-tight mb-6 text-center lg:text-left"
            >
              O crescimento das entregas exige{' '}
              <span className="text-brand-secondary">novas soluções</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-gray-600 font-roboto leading-relaxed mb-8 text-center lg:text-left"
            >
              Com a escalada do e-commerce e das entregas rápidas, condomínios e empresas
              enfrentam desafios cada vez maiores na gestão de encomendas.
            </motion.p>

            <div className="space-y-4 mb-8">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-highlight/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <p.icon size={18} className="text-brand-highlight" />
                  </div>
                  <p className="text-gray-700 font-roboto leading-relaxed pt-1.5">{p.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-brand-primary font-roboto leading-relaxed font-medium mb-8 text-center lg:text-left">
              A automação com lockers inteligentes resolve esses desafios de forma simples e segura.
            </p>

            <motion.a
              href="#contato"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95 }}
              className="group hidden lg:inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white font-roboto font-semibold rounded-sm hover:bg-brand-secondary/90 transition-all hover:scale-[1.03] shadow-lg shadow-brand-secondary/20"
            >
              Conheça a solução
            </motion.a>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative pb-14 lg:pb-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  style={{ scale: imageScale, y: imageY, filter: imageBlur }}
                  src="/problema-entrega.webp"
                  alt="Desafio das entregas"
                  className="w-full h-[500px] object-cover origin-center will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-brand-primary/10 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.55 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-xs z-10"
              >
                <div className="text-3xl font-outfit font-bold text-brand-highlight mb-1">
                  R$1,5 trilhão
                </div>
                <div className="text-sm text-gray-600 font-roboto">
                  logística no Brasil movimenta anualmente
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.65 }}
                className="absolute -top-6 -right-6 bg-brand-highlight text-brand-primary rounded-2xl p-4 shadow-xl z-10"
              >
                <div className="text-xl font-outfit font-bold">24/7</div>
                <div className="text-xs font-roboto opacity-90">disponibilidade</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95 }}
              className="flex justify-center lg:hidden relative z-20 mt-8"
            >
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white font-roboto font-semibold rounded-sm hover:bg-brand-secondary/90 transition-all hover:scale-[1.03] shadow-lg shadow-brand-secondary/20"
              >
                Conheça a solução
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}