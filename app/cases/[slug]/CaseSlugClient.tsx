'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Case } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-roboto text-gray-700 text-base leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-outfit font-bold text-2xl text-brand-primary mt-10 mb-4 pl-4 border-l-4 border-brand-secondary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-outfit font-semibold text-xl text-brand-primary mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-highlight pl-6 my-6 italic text-gray-600 font-roboto bg-brand-highlight/5 py-4 pr-4 rounded-r-sm">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-5 font-roboto text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 font-roboto text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  types: {
    image: ({ value }: { value: { asset?: { url: string }; alt?: string } }) => (
      <div className="my-8 overflow-hidden rounded-sm">
        {value.asset?.url && (
          <img src={value.asset.url} alt={value.alt || ''} className="w-full h-auto" />
        )}
      </div>
    ),
    divisoria: () => <hr className="my-10 border-gray-200" />,
  },
}

export default function CaseSlugClient({ item }: { item: Case }) {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0)
      setScrolled(el.scrollTop > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Barra de progresso de leitura */}
      <div
        className={`fixed top-20 left-0 right-0 z-[51] h-[3px] transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className="h-full bg-brand-secondary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] bg-brand-primary overflow-hidden">
        {item.imagemCapa?.asset?.url ? (
          <Image
            src={item.imagemCapa.asset.url}
            alt={item.empresa}
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-brand-primary/30" />

        <div className="relative h-full flex flex-col justify-end max-w-4xl mx-auto px-6 lg:px-8 pb-12 pt-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {item.segmento && (
              <span className="inline-block text-xs font-roboto font-medium px-3 py-1 rounded-full bg-brand-secondary/80 text-white w-fit">
                {item.segmento}
              </span>
            )}

            <h1 className="font-outfit font-bold text-3xl md:text-4xl text-white leading-tight">
              {item.titulo}
            </h1>
          </m.div>
        </div>
      </section>

      {/* Corpo */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-roboto text-gray-500 hover:text-brand-primary transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Voltar para Cases
          </Link>

          {item.descricaoCurta && (
            <p className="font-roboto text-lg text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-100">
              {item.descricaoCurta}
            </p>
          )}

          {item.corpo && (
            <PortableText
              value={item.corpo as Parameters<typeof PortableText>[0]['value']}
              components={portableTextComponents}
            />
          )}
        </div>
      </section>

      {/* Resultados */}
      {item.resultados && item.resultados.length > 0 && (
        <section className="bg-brand-primary py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-outfit font-bold text-2xl text-white mb-10 text-center">
              Resultados
            </h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {item.resultados.map((r) => (
                <div key={r._key} className="text-center w-36">
                  <p className="font-outfit font-bold text-4xl text-brand-secondary mb-1">
                    {r.valor}
                  </p>
                  <p className="font-roboto text-sm text-white/60 leading-snug">{r.metrica}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Depoimento */}
      {item.depoimento?.texto && (
        <section className="bg-brand-light py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-6xl text-brand-secondary/20 font-serif leading-none select-none">"</span>
            <blockquote className="font-roboto text-xl text-gray-700 italic leading-relaxed mb-6 -mt-4">
              {item.depoimento.texto}
            </blockquote>
            <div>
              <p className="font-outfit font-semibold text-brand-primary">{item.depoimento.nome}</p>
              {item.depoimento.cargo && (
                <p className="font-roboto text-sm text-gray-500">{item.depoimento.cargo}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer nav */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-roboto font-medium rounded-sm hover:bg-brand-primary/90 transition-all hover:scale-105"
          >
            <ArrowLeft size={16} />
            Ver todos os cases
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
