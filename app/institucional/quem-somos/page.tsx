'use client'

import { m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const valores = [
  { titulo: 'Flexibilidade + Colaboração' },
  { titulo: 'Foco Cliente + Seja transparente' },
  { titulo: 'Simplificação + Resultado' },
  { titulo: 'Work hard + Play hard' },
]

const ecosistema = [
  { nome: 'OneBrain', descricao: 'Outsourcing de talentos de TI com inteligência artificial.', href: 'https://outsourcing.onebrain.com.br/' },
  { nome: 'FAST', descricao: 'Fábrica de software com IA, low-code e no-code.', href: 'https://fast.onebrain.com.br/' },
  { nome: 'Kolivo', descricao: 'Operações de TI inteligentes e monitoramento em tempo real.', href: 'https://www.kolivo.com.br/' },
  { nome: 'Outforce', descricao: 'Tech hunting e aquisição de profissionais de tecnologia.', href: 'https://www.outforce.com.br/' },
  { nome: 'Grilo', descricao: 'Validação de desenvolvedores por análise prática de código real.', href: 'https://grilo.com.br/' },
]


export default function QuemSomosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-brand-primary pt-40 pb-24 overflow-hidden">
        <img
          src="/banner-sobre.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Institucional
            </span>
            <h1 className="font-outfit text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quem somos
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Mais de 10 anos transformando a logística de entregas com tecnologia de smart lockers acessível, segura e conectada.
            </p>
          </m.div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-outfit text-4xl font-bold text-brand-primary mb-6">
                Tecnologia que simplifica a última milha
              </h2>
              <div className="space-y-4 font-roboto text-gray-600 leading-relaxed">
                <p>
                  A Stoom é uma empresa especializada em smart lockers e plataforma de gestão de entregas. Fundada em 2014, em Campinas (SP), por ex-alunos da Unicamp, nascemos como spin-off da OneBrain — software house com mais de duas décadas de mercado.
                </p>
                <p>
                  Ao longo de mais de 10 anos, evoluímos para ser referência em soluções de armários inteligentes para o varejo, condomínios, indústrias e operações logísticas. Nosso smart locker combina hardware e software próprio para automatizar a entrega, retirada e devolução de produtos com segurança, rastreabilidade e controle em tempo real.
                </p>
                <p>
                  Atendemos empresas como Petz, Tenda Atacado, iFood Shop e Zee.Dog — parceiros que confiam na Stoom para elevar a experiência de entrega dos seus clientes.
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="bg-brand-light rounded-2xl p-12 text-center">
                <span className="font-outfit text-7xl font-bold text-brand-secondary block mb-3">
                  +10
                </span>
                <span className="font-roboto text-lg text-brand-primary/70 font-medium">
                  anos no mercado
                </span>
                <p className="font-roboto text-sm text-brand-primary/50 mt-3 max-w-xs">
                  Desde 2014 transformando a logística de entregas com tecnologia
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-outfit text-4xl font-bold text-brand-primary mb-4">
              Missão, Visão e Valores
            </h2>
          </m.div>

          {/* Missão + Visão ao lado da imagem */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-12">
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 flex-1">
                <h3 className="font-outfit text-xl font-bold text-brand-primary mb-3">Missão</h3>
                <p className="font-roboto text-gray-600 leading-relaxed">
                  Simplificar e automatizar a logística de entregas por meio de smart lockers seguros e conectados, criando uma experiência de compra superior para consumidores e empresas.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 flex-1">
                <h3 className="font-outfit text-xl font-bold text-brand-primary mb-3">Visão</h3>
                <p className="font-roboto text-gray-600 leading-relaxed">
                  Ser a referência em smart lockers e gestão de entregas no Brasil, impulsionando a transformação logística com tecnologia acessível e escalável.
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden min-h-[360px]"
            >
              <Image
                src="/stoom-missao.webp"
                alt="Missão Stoom"
                fill
                className="object-cover"
              />
            </m.div>
          </div>

          {/* Valores */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-outfit text-2xl font-bold text-brand-primary mb-6 text-center">Valores</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((v, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-center text-center">
                  <h4 className="font-outfit font-semibold text-brand-primary">{v.titulo}</h4>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* Ecossistema Landor */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Parte de algo maior
            </span>
            <h2 className="font-outfit text-4xl font-bold text-white mb-4">
              Ecossistema Landor
            </h2>
            <p className="font-roboto text-white/70 text-lg max-w-2xl mx-auto mb-12">
              A Stoom integra a Landor, uma holding de tecnologia que reúne empresas especializadas para resolver desafios complexos de forma integrada. Juntas, cobrimos todo o ciclo de transformação digital.
            </p>
          </m.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 items-stretch mb-10">
            {ecosistema.map((empresa, i) => {
              const cardClass = `h-full flex flex-col bg-white/5 border border-white/10 rounded-xl p-6 transition-colors ${empresa.href ? 'hover:bg-white/10' : ''}`
              const inner = (
                <>
                  <h3 className="font-outfit text-lg font-bold text-white mb-2">{empresa.nome}</h3>
                  <p className="font-roboto text-sm text-white/60 leading-relaxed flex-1">{empresa.descricao}</p>
                  {empresa.href && (
                    <span className="inline-block mt-3 text-xs font-roboto text-brand-highlight font-medium">
                      Saiba mais
                    </span>
                  )}
                </>
              )
              return (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="h-full"
                >
                  {empresa.href ? (
                    <a href={empresa.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </m.div>
              )
            })}
          </div>

          <div className="text-center">
            <a
              href="https://www.landor.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-highlight text-brand-highlight font-roboto font-medium rounded-sm hover:bg-brand-highlight hover:text-brand-primary transition-all"
            >
              Conheça o ecossistema Landor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
