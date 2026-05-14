'use client'

import { m } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const parceiros = [
  {
    nome: 'Laurenti',
    descricao: 'Líder em Self-Checkout, com 5.000+ implementações no Brasil. Especialista em soluções inteligentes: Terminais Self-Checkout, Auto Atendimento e Smart Locker.',
    logo: '/parceiros/logo-laurenti.svg',
  },
  {
    nome: 'Integracorp',
    descricao: 'Pioneiras em Portaria Remota, monitoramento remoto de segurança em condomínios e empresas, utilizando tecnologias sempre inovadoras.',
    logo: '/parceiros/logo-integracorp.webp',
  },
  {
    nome: 'Pagar.me',
    descricao: 'Plataforma digital de serviços financeiros, capacitando negócios na recepção de pagamentos online, aprimorando a experiência do empreendedor brasileiro.',
    logo: '/parceiros/logo-pagarme.svg',
  },
  {
    nome: 'Pay4Fun',
    descricao: 'Pay4Fun é uma carteira eletrônica pré-paga que ajuda a tornar o processo de pagamento mais prático e seguro.',
    logo: '/parceiros/logo-pay4fun.webp',
  },
  {
    nome: 'Plugg.to',
    descricao: 'O Plugg.To é um hub que integra o maior número de marketplaces do Brasil, proporcionando recursos para alavancar as vendas.',
    logo: '/parceiros/logo-pluggto.svg',
  },
  {
    nome: 'SCM-SIGA',
    descricao: 'Atendimento de Suporte Online Protheus: Customizações, Consultoria e Suporte em módulos ERP, RH e programação, nível Master.',
    logo: '/parceiros/logo-scm.webp',
  },
  {
    nome: 'Vestme',
    descricao: 'O Hub da moda circular, online de roupas de segunda mão, gentilmente usadas que vão salvar seu closet, sua carteira e o planeta.',
    logo: '/parceiros/logo-vestme.webp',
  },
  {
    nome: 'Wave Commerce',
    descricao: 'Agência especializada em e-commerces e marketplaces, impulsionando resultados para lojas virtuais de médias e grandes empresas.',
    logo: '/parceiros/logo-wave.webp',
  },
  {
    nome: 'Zhaz',
    descricao: 'Soluções em alta tecnologia, assistência em impressoras térmicas, leitores de códigos de barras, coletores de dados, entre outros produtos personalizados.',
    logo: '/parceiros/logo-zhaz.webp',
  },
  {
    nome: 'Konduto',
    descricao: 'Pioneira no uso de tecnologias machine learning, a Konduto é uma empresa especializada na antifraude on-line.',
    logo: '/parceiros/logo-konduto.webp',
  },
  {
    nome: 'Koin',
    descricao: 'Plataforma certificada PCI, oferece os principais meios de pagamento e "buy now, pay later". Proteção Antifraude, com taxas reduzidas para Cartão de Crédito, Pix (in e out), Boleto e Pix Parcelado.',
    logo: '/parceiros/logo-koin.svg',
  },
  {
    nome: 'PayPal',
    descricao: 'A PayPal oferece uma maneira inteligente e prática de realizar pagamentos on-line com mais comodidade ao usuário.',
    logo: '/parceiros/logo-paypal.svg',
  },
  {
    nome: 'E-commerce Brasil',
    descricao: 'Como o maior portal brasileiro de e-commerce, o E-commerce Brasil é referência quando o assunto é indicar as tendências e novidades do comércio on-line.',
    logo: '/parceiros/logo-ecbr.svg',
  },
  {
    nome: 'ComSchool',
    descricao: 'A ComSchool é a única escola brasileira com o certificado da Associação Brasileira de Comércio Eletrônico, que é referência na educação do mercado digital.',
    logo: '/parceiros/logo-comschool.webp',
  },
  {
    nome: 'Deco',
    descricao: 'Desenvolvedora de storefronts de alta performance para lojas virtuais.',
    logo: '/parceiros/logo-deco.webp',
  },
  {
    nome: 'Eficaz',
    descricao: 'Autoridade em e-commerce com expertise em oferecer soluções completas para levar seu negócio ao sucesso, com uma equipe tão preocupada com sua lucratividade quanto você.',
    logo: '/parceiros/logo-eficaz.svg',
  },
  {
    nome: 'ClearSale',
    descricao: 'A ClearSale apresenta uma tecnologia antifraude de alta qualidade para garantir a segurança das plataformas.',
    logo: '/parceiros/logo-clearsale.webp',
  },
  {
    nome: 'Campinas Tech',
    descricao: 'A Campinas Tech é um projeto que tem a parceria de várias startups, hubs de inovação e grandes empresas que promovem o incentivo de novos negócios de alto impacto.',
    logo: '/parceiros/logo-campinastech.webp',
  },
  {
    nome: 'Biso',
    descricao: 'A Biso é uma solução ativa de BI focada 100% em seu e-commerce.',
    logo: '/parceiros/logo-biso.webp',
  },
  {
    nome: 'Auaha',
    descricao: 'Agência de inovação e criatividade dedicada na transformação da presença digital.',
    logo: '/parceiros/logo-auaha.svg',
  },
  {
    nome: 'AnyMarket',
    descricao: 'Hub integrador de marketplaces líder na América Latina, simplificando a gestão de vendas.',
    logo: '/parceiros/logo-anymarket.svg',
  },
  {
    nome: 'AWS',
    descricao: 'Líder em Self-Checkout, com 5.000+ implementações no Brasil. Especialista em soluções inteligentes: Terminais Self-Checkout, Auto Atendimento e Smart Locker.',
    logo: '/parceiros/logo-aws.svg',
  },
]

function LogoCard({ parceiro, index }: { parceiro: typeof parceiros[0]; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-full h-16 flex items-center justify-center">
        <img
          src={parceiro.logo}
          alt={`Logo ${parceiro.nome}`}
          className="max-h-14 max-w-[160px] w-auto object-contain"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        <span
          className="hidden items-center justify-center font-outfit text-lg font-bold text-brand-primary"
          style={{ display: 'none' }}
        >
          {parceiro.nome}
        </span>
      </div>
      <p className="font-roboto text-sm text-gray-600 leading-relaxed">{parceiro.descricao}</p>
    </m.div>
  )
}

export default function ParceirosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-brand-primary pt-40 pb-24 overflow-hidden">
        <img
          src="/banner-parceiros.webp"
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
              Parceiros
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Empresas e soluções que integram o ecossistema da Stoom para entregar mais tecnologia, segurança e eficiência aos nossos clientes.
            </p>
          </m.div>
        </div>
      </section>

      {/* Grid de parceiros */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parceiros.map((parceiro, i) => (
              <LogoCard key={parceiro.nome} parceiro={parceiro} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
