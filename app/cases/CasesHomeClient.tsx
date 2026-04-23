'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Case } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function CaseCard({ item, index }: { item: Case; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Link href={`/cases/${item.slug.current}`} className="group block h-full">
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
          {/* Logo */}
          <div className="h-36 bg-brand-light flex items-center justify-center px-8 flex-shrink-0">
            {item.logoEmpresa?.asset?.url ? (
              <div className="relative w-full h-full">
                <Image
                  src={item.logoEmpresa.asset.url}
                  alt={item.empresa}
                  fill
                  className="object-contain p-6"
                />
              </div>
            ) : (
              <span className="font-outfit font-bold text-2xl text-brand-primary/20">
                {item.empresa}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            {item.segmento && (
              <span className="inline-block text-xs font-roboto font-medium px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20 mb-3 w-fit">
                {item.segmento}
              </span>
            )}

            <h3 className="font-outfit font-semibold text-brand-primary text-lg leading-snug mb-3 group-hover:text-brand-secondary transition-colors">
              {item.empresa}
            </h3>

            {item.descricaoCurta && (
              <p className="font-roboto text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {item.descricaoCurta}
              </p>
            )}

            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="text-brand-secondary text-sm font-roboto font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Ver case <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CasesHomeClient({ cases }: { cases: Case[] }) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-primary pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-secondary font-roboto text-sm font-medium uppercase tracking-widest mb-3">
              Resultados reais
            </p>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
              Cases de Sucesso
            </h1>
            <p className="text-white/60 font-roboto text-lg max-w-xl">
              Projetos reais entregues para empresas líderes de mercado. Veja como a Stoom transforma operações logísticas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-brand-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {cases.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 font-roboto text-lg">
                Nenhum case publicado ainda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {cases.map((item, i) => (
                <CaseCard key={item._id} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
