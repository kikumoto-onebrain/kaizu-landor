'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Conteudo } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-highlight flex-shrink-0" />
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

export default function ConteudoSlugClient({ conteudo }: { conteudo: Conteudo }) {
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
      <section className="relative h-[55vh] min-h-[380px] bg-brand-primary overflow-hidden">
        {conteudo.heroImage?.asset?.url ? (
          <Image
            src={conteudo.heroImage.asset.url}
            alt={conteudo.titulo}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary/80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/50 to-transparent" />

        <div className="relative h-full flex flex-col justify-end max-w-4xl mx-auto px-6 lg:px-8 pb-12 pt-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {conteudo.categoria && (
              <span className="inline-block text-xs font-roboto font-medium px-3 py-1 rounded-full bg-brand-highlight/20 text-brand-highlight border border-brand-highlight/30 mb-4">
                {conteudo.categoria.titulo}
              </span>
            )}
            <h1 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              {conteudo.titulo}
            </h1>
            {conteudo.dataPublicacao && (
              <div className="flex items-center gap-2 text-white/50 text-sm font-roboto mt-4">
                <Calendar size={14} />
                <span>
                  {format(new Date(conteudo.dataPublicacao), "d 'de' MMMM 'de' yyyy", {
                    locale: ptBR,
                  })}
                </span>
              </div>
            )}
          </m.div>
        </div>
      </section>

      {/* Artigo */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 text-sm font-roboto text-gray-500 hover:text-brand-primary transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Voltar para Conteúdos
          </Link>

          {conteudo.corpo && (
            <div>
              <PortableText value={conteudo.corpo as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/conteudos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-roboto font-medium rounded-sm hover:bg-brand-primary/90 transition-all hover:scale-105"
            >
              <ArrowLeft size={16} />
              Ver todos os conteúdos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
