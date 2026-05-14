'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { Search, Calendar, ChevronDown, ArrowRight } from 'lucide-react'
import type { Conteudo, Categoria } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function ConteudoCard({ conteudo, index }: { conteudo: Conteudo; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="h-full"
    >
      <Link href={`/conteudos/${conteudo.slug.current}`} className="group block h-full">
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
          <div className="relative h-48 overflow-hidden bg-brand-light flex-shrink-0">
            {conteudo.heroImage?.asset?.url ? (
              <Image
                src={conteudo.heroImage.asset.url}
                alt={conteudo.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-primary to-brand-primary/80 flex items-center justify-center">
                <span className="text-white/10 text-7xl font-outfit font-bold">S</span>
              </div>
            )}
          </div>

          <div className="flex flex-col flex-1 p-6">
            {conteudo.categoria && (
              <span className="inline-block text-xs font-roboto font-medium px-3 py-1 rounded-full bg-brand-highlight/10 text-brand-highlight border border-brand-highlight/20 mb-3 w-fit">
                {conteudo.categoria.titulo}
              </span>
            )}

            <h3 className="font-outfit font-semibold text-brand-primary text-lg leading-snug mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">
              {conteudo.titulo}
            </h3>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-gray-400 text-sm font-roboto">
                <Calendar size={13} />
                <span>
                  {conteudo.dataPublicacao
                    ? format(new Date(conteudo.dataPublicacao), "d 'de' MMM. yyyy", { locale: ptBR })
                    : '—'}
                </span>
              </div>
              <span className="text-brand-secondary text-sm font-roboto font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Ler mais <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </m.div>
  )
}

interface Props {
  conteudos: Conteudo[]
  categorias: Categoria[]
}

export default function ConteudosHomeClient({ conteudos, categorias }: Props) {
  const [search, setSearch] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return conteudos.filter(c => {
      const matchSearch =
        !q ||
        c.titulo.toLowerCase().includes(q) ||
        c.categoria?.titulo.toLowerCase().includes(q) ||
        c.palavrasChave?.some(p => p.toLowerCase().includes(q))
      const matchCategoria = !categoriaAtiva || c.categoria?.slug.current === categoriaAtiva
      return matchSearch && matchCategoria
    })
  }, [conteudos, search, categoriaAtiva])

  const categoriaLabel = categoriaAtiva
    ? categorias.find(c => c.slug.current === categoriaAtiva)?.titulo
    : 'Todas as categorias'

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-primary pt-40 pb-20 relative overflow-hidden">
        <img
          src="/banner-conteudos.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-highlight font-roboto text-sm font-medium uppercase tracking-widest mb-3">
              Hub de conhecimento
            </p>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
              Conteúdos
            </h1>
            <p className="text-white/60 font-roboto text-lg max-w-xl">
              Insights, tendências e novidades sobre logística inteligente e gestão de entregas.
            </p>
          </m.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar conteúdos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm font-roboto text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-brand-highlight focus:ring-1 focus:ring-brand-highlight/30 transition-colors"
            />
          </div>

          {categorias.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-sm text-sm font-roboto text-gray-700 hover:border-brand-highlight transition-colors w-full sm:w-[220px] justify-between"
              >
                <span className="truncate">{categoriaLabel}</span>
                <ChevronDown
                  size={14}
                  className={`flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg z-10 overflow-hidden">
                  <button
                    onClick={() => { setCategoriaAtiva(null); setDropdownOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-roboto hover:bg-brand-light transition-colors ${!categoriaAtiva ? 'text-brand-secondary font-medium' : 'text-gray-700'}`}
                  >
                    Todas as categorias
                  </button>
                  {categorias.map(c => (
                    <button
                      key={c._id}
                      onClick={() => { setCategoriaAtiva(c.slug.current); setDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-roboto hover:bg-brand-light transition-colors ${categoriaAtiva === c.slug.current ? 'text-brand-secondary font-medium' : 'text-gray-700'}`}
                    >
                      {c.titulo}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-brand-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 font-roboto text-lg mb-4">
                {conteudos.length === 0
                  ? 'Nenhum conteúdo publicado ainda.'
                  : 'Nenhum resultado encontrado.'}
              </p>
              {(search || categoriaAtiva) && (
                <button
                  onClick={() => { setSearch(''); setCategoriaAtiva(null) }}
                  className="text-brand-secondary font-roboto text-sm hover:underline"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c, i) => (
                <ConteudoCard key={c._id} conteudo={c} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
