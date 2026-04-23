import type { Metadata } from 'next'
import { getCases } from '@/lib/sanity'
import CasesHomeClient from './CasesHomeClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Stoom',
  description: 'Conheça os projetos e resultados que a Stoom entregou para empresas líderes do mercado.',
}

export default async function CasesPage() {
  const cases = await getCases()
  return <CasesHomeClient cases={cases} />
}
