// Uso: SANITY_TOKEN=xxx node scripts/update-petz-corpo.js
const { createClient } = require('@sanity/client')

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('Defina a variável SANITY_TOKEN antes de rodar o script.')
  process.exit(1)
}

const client = createClient({
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

let n = 0
const k = () => `k${(++n).toString().padStart(5, '0')}`

function block(style, text) {
  return {
    _key: k(),
    _type: 'block',
    style,
    markDefs: [],
    children: [{ _key: k(), _type: 'span', text, marks: [] }],
  }
}

const corpo = [
  block('normal', 'Fundada em 2002, a Petz possui mais de 140 lojas físicas em 18 estados, além do e-commerce. Com a implementação das plataformas de e-commerce da Stoom em 2015, a empresa aumentou seu faturamento on-line em 85 vezes, transformando seu e-commerce em uma unidade de negócios representativa e lucrativa.'),
  block('normal', 'A ideia inicial era facilitar as compras e dar mais comodidade aos clientes, oferecendo produtos para todo o país. Visando uma jornada do cliente omnichannel, o primeiro passo para a mudança da loja virtual foi integrar a plataforma Stoom ao ERP da empresa. Dessa forma, foi possível otimizar a distribuição, liberando estoques diferentes por filiais.'),
  block('normal', '"Integrar o e-commerce ao ERP da Petz viabilizou utilizarmos as informações de estoque de cada loja para oferecer prazos menores de entrega ao cliente final", explica Lino Melhado, especialista técnico da Stoom que esteve desde o início na operação da Petz.'),

  block('h2', 'Integração da plataforma com as lojas físicas'),
  block('normal', 'O próximo passo dessa parceria foi a integração ainda mais abrangente entre o Petz e-commerce e as lojas físicas. Com esse passo, foi possível oferecer para o cliente uma experiência de compra on-line porém com retirada na loja física (pick-up store).'),
  block('normal', '"Nesse primeiro momento, não tínhamos a entrega sendo feita pela loja, mas sabíamos que as próprias lojas abasteciam o centro de distribuição (CD) quando era preciso realizar uma entrega mais rapidamente. Um dos primeiros grandes movimentos de logística foi justamente a integração entre e-commerce e lojas físicas.", complementa Lino.'),
  block('normal', 'O processo, que inicialmente levava de 2 a 5 dias úteis, hoje permite que o consumidor retire o produto na loja Petz de sua preferência em até uma hora, usando o próprio estoque da loja para isso.'),
  block('normal', 'A Stoom foi a primeira a implementar essa modalidade em um e-commerce do segmento pet no Brasil. Depois desse projeto, o foco foi a implementação do ship from store. Dessa forma, a loja mais próxima ao cliente, e que tenha todos os produtos selecionados, é capaz de despachar o pedido com rapidez, reduzindo o prazo e o preço do frete.'),
  block('normal', 'Além de representar satisfação e economia para o consumidor, essa estratégia permite que a Petz consiga focar investimentos na expansão e abertura de novas lojas, as quais são, sem dúvidas, um ponto de contato valioso com o público.'),
  block('normal', '"Hoje, a própria loja da Petz na Bahia, por exemplo, pode atender toda a região; e a entrega que antes levava sete dias, hoje é feita em horas, e com um valor para o cliente muito mais barato e competitivo", comenta Lino.'),

  block('h2', 'Adaptação às necessidades dos clientes'),
  block('normal', 'Atualmente, a Stoom trabalha com um modelo de gestão baseado em squads. Esse modelo foi adotado e popularizado pelo Spotify e consiste, resumidamente, em reunir profissionais com diferentes habilidades para atuarem em soluções específicas, de forma rápida e com autonomia.'),
  block('normal', '"Essa forma de organização garante agilidade na resolução de problemas e implementação de melhorias. No caso da Petz, cada squad possui um líder técnico que está em contato constante com a equipe interna do cliente, entendendo as dores e transformando em oportunidade. Ouvimos as necessidades da Petz e o que eles acham que podem melhorar, e propomos uma solução técnica", explica Lino.'),

  block('h2', 'In-House'),
  block('normal', 'O modelo de atendimento In-House consiste em oferecer um time dedicado exclusivamente à Petz, inclusive com profissionais alocados na empresa para vivenciar a cultura e atender às demandas de forma mais eficiente e ágil. A Petz faz parte, ainda, do processo de contratação desses profissionais, garantindo o alinhamento de expectativas.'),
  block('normal', 'Esse modelo permitiu que a Stoom contribuísse para a campanha de divulgação do Pet-commerce, uma plataforma que usa inteligência artificial para leitura das expressões faciais de cães mostrando o interesse do pet em determinado produto e que foi idealizada pela agência Ogilvy Brasil para a Petz, rendendo um Leão de Ouro no Festival Internacional de Criatividade de Cannes.'),

  block('h2', 'Inteligência artificial'),
  block('normal', 'A Stoom contribuiu para o desenvolvimento de um site equipado com um sistema de inteligência artificial e reconhecimento facial para cachorros, que analisa as expressões dos animais, captadas pelas câmeras de notebooks e outros dispositivos móveis, para indicar o nível de interesse dos pets em relação a brinquedos, bolinhas e petiscos exibidos em vídeos na tela.'),
  block('normal', 'Implementar a inteligência artificial na plataforma de e-commerce da Petz possibilita que a experiência do cliente seja mais completa e personalizada. Além disso, essa inovação se tornou referência não só no setor pet, mas no mercado de e-commerce como um todo, colocando a Petz como finalista de vários prêmios relacionados ao ecossistema.'),

  block('h2', 'Locker'),
  block('normal', 'Outra inovação que a Stoom contribuiu de forma direta para a Petz foi o Locker, criando uma tecnologia que facilita a logística do e-commerce. Trata-se de um armário inteligente onde o consumidor tem a possibilidade de retirar os produtos comprados pela loja virtual utilizando apenas um QR-Code recebido por e-mail. Retirada rápida, sem contato e que gera muito valor na experiência do cliente.'),
  block('normal', 'O Locker funciona 24h e dá mais liberdade para os clientes escolherem quando e onde retirar sua compra. Além disso, a Petz teve a possibilidade de personalizar seus armários com adesivos com a logo e as cores da marca. Com essa solução, os clientes não precisam ficar presos em casa aguardando sua compra.'),

  block('h2', 'Importados'),
  block('normal', 'Para possibilitar a seus clientes a compra de produtos que são vendidos somente no exterior, a Petz, junto com a Stoom, criou um site de produtos importados. O site funciona como uma plataforma de marketplace em parceria com a empresa Noc Noc. Os clientes conseguem encontrar frete grátis, o que é uma grande vantagem em se tratando de comprar itens de outros países.'),

  block('h2', 'App Petz'),
  block('normal', 'Cada vez mais os consumidores que fazem suas compras pela internet estão buscando soluções no mobile. Por isso, a Stoom desenvolveu em 2018 o backend do aplicativo da Petz, que possui todas as funcionalidades do site e é onde novas funções são testadas.'),
  block('normal', 'A Stoom trabalha com o mobile first nesse caso, ou seja, desenvolve as funcionalidades primeiro para o aplicativo e depois as implementa no e-commerce no formato web. É o caso das assinaturas de produtos, onde o cliente pode decidir receber seus produtos com determinada frequência sem precisar entrar sempre no aplicativo para finalizar a compra.'),

  block('h2', 'Seres'),
  block('normal', 'A Seres são clínicas veterinárias da Petz, alocadas na maioria das lojas. A Stoom desenvolveu o site em 2018 para que os clientes possam agendar consultas e encontrar as clínicas mais próximas de suas residências. A missão da Petz é ser mundialmente reconhecida como melhor ecossistema do segmento pet e se tornar referência mundial no assunto.'),
  block('normal', 'Para isso, é necessária muita competência técnica para integrar todo o ecossistema, e isso a Stoom tem de sobra. Neste universo existem sistemas de PDV, marketplace, ERP, sistema veterinário, sistemas de agendamento e muitos outros além do e-commerce.'),
  block('normal', 'Assim a empresa poderá estar presente em todas as situações da vida dos bichos de estimação. Com essa integração, será possível agendar consultas por meio do aplicativo, além de encontrar todas as clínicas da Seres em um mapa.'),

  block('h2', 'IPO'),
  block('normal', 'Em 2020 a Petz entrou para o seleto grupo de empresas com capital aberto no Brasil. A estratégia digital em parceria com a Stoom é um dos principais pontos que brilham os olhos dos investidores, e que possibilitou a captação de mais de 3 bilhões de reais neste movimento.'),
  block('normal', 'Para saber mais sobre nossa tecnologia, entre em contato com a nossa equipe de especialistas e confira todos os benefícios de contar com alto nível de personalização e um time dedicado ao seu projeto!'),
]

async function run() {
  const doc = await client.fetch(
    `*[_type == "case" && slug.current == "petz"][0] { _id, titulo }`
  )

  if (!doc) {
    console.error('Case "petz" não encontrado no Sanity.')
    process.exit(1)
  }

  console.log(`Atualizando: ${doc.titulo} (${doc._id})`)
  await client.patch(doc._id).set({ corpo }).commit()
  console.log(`Pronto! ${corpo.length} blocos escritos.`)
}

run().catch(err => {
  console.error(err.message)
  process.exit(1)
})
