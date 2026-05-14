import { m } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getMidias, Midia } from '@/lib/sanity'

function formatarData(iso?: string) {
  if (!iso) return null
  const [ano, mes, dia] = iso.split('-')
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]}. de ${ano}`
}

function CardMidia({ item }: { item: Midia }) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="relative w-full h-44 bg-brand-light flex items-center justify-center shrink-0">
        {item.imagem?.asset?.url ? (
          <Image
            src={item.imagem.asset.url}
            alt={item.titulo}
            fill
            className="object-cover"
          />
        ) : (
          <span className="font-outfit text-sm font-semibold text-brand-primary/40 px-6 text-center">
            {item.veiculo}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-roboto font-medium text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded-full">
            {item.veiculo}
          </span>
          {item.dataPublicacao && (
            <span className="text-xs font-roboto text-gray-400">
              {formatarData(item.dataPublicacao)}
            </span>
          )}
        </div>

        <h2 className="font-outfit text-base font-semibold text-brand-primary leading-snug flex-1">
          {item.titulo}
        </h2>

        <a
          href={item.urlExterna}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-roboto font-medium text-brand-highlight hover:text-brand-secondary transition-colors mt-auto"
        >
          Leia mais
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default async function StoomNaMidiaPage() {
  const midias = await getMidias()

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-brand-primary pt-40 pb-24 overflow-hidden">
        <img
          src="/banner-midia.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Institucional
            </span>
            <h1 className="font-outfit text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stoom na Mídia
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Veja o que a imprensa e os principais veículos do mercado estão falando sobre a Stoom.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de notícias */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {midias.length === 0 ? (
            <p className="text-center font-roboto text-gray-400">Nenhuma notícia publicada ainda.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {midias.map((item) => (
                <CardMidia key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
