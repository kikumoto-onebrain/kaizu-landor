// Uso: SANITY_TOKEN=xxx node scripts/update-ifoodshop-corpo.js
const { createClient } = require('@sanity/client')

const token = process.env.SANITY_TOKEN
if (!token) { console.error('Defina SANITY_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'lyajz0yy', dataset: 'production',
  apiVersion: '2024-01-01', token, useCdn: false,
})

let n = 0
const k = () => `k${(++n).toString().padStart(5, '0')}`

function block(style, text) {
  return { _key: k(), _type: 'block', style, markDefs: [], children: [{ _key: k(), _type: 'span', text, marks: [] }] }
}

function bullet(text) {
  return { _key: k(), _type: 'block', style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: [{ _key: k(), _type: 'span', text, marks: [] }] }
}

const corpo = [
  block('normal', 'Com a ajuda do iFoodShop, os estabelecimentos do iFood têm acesso a uma cotação de insumos facilitada, com uma apresentação padronizada que organiza Marcas, Lojas, Categorias e Preços destes produtos.'),
  block('normal', 'Em entrevista com César Bueno, o techlead da Stoom responsável por toda a operação junto ao iFood Shop, levantamos algumas das principais características deste grande marketplace.'),
  block('blockquote', '"Em resumo o site é a interface entre restaurantes e fornecedores de suprimentos. É um marketplace que concentra muitas features interessantes, que construímos com o trabalho do nosso time e do iFood."'),
  block('normal', 'Algumas características interessantes desse sistema são:'),

  block('h2', 'Promoções personalizadas'),
  block('normal', 'Ele permite fazer aplicação de campanhas customizadas por fornecedor, por produto, por cliente, por grupo de clientes e por vouchers.'),
  block('blockquote', '"Integramos o site com a Richrelevance, uma tecnologia que aprende com o usuário e mostra os produtos que ele tem maior propensão a comprar com mais relevância nas buscas."'),

  block('h2', 'Vitrine dinâmica por geolocalização'),
  block('normal', 'A home page pode ser diferente para cada região que você cadastrar.'),
  block('normal', 'A vitrine de produtos é montada dinamicamente, mostrando apenas os produtos disponíveis em sua região. Em caso de dois lojistas vendendo o produto na mesma região o sistema exibe o melhor preço ao cliente.'),

  block('h2', 'Recursos customizados do E-commerce B2B'),
  block('normal', 'Um produto pode ter um preço variável dependendo da quantidade que o cliente adicionar no carrinho (e.g. 1 por 3, 4 por 10).'),
  bullet('Os lojistas também podem cadastrar bonificações para os clientes em forma de descontos em pedidos.'),
  bullet('Um fornecedor pode atualizar seu estoque automaticamente via API, ou de forma manual pelo manager.'),

  block('h2', 'Parcerias entre iFood Shop e Restaurante'),
  bullet('Na parte de pagamentos temos as features padrão como boleto, cartão e além disso temos integrações com o sistema de pagamentos proprietário deles, de forma que é possível adiantar pagamentos em forma de crédito.'),
  bullet('O lojista pode fazer diversos tipos de parcerias com o iFood Shop, como por exemplo mostrar o produto dele com maior relevância nas vitrines e lançar campanhas com custo compartilhado (e.g. 50% off, 20% iFood + 30% lojista).'),

  block('h2', 'Sofisticação logística'),
  bullet('A entrega pode ser feita de 2 formas: Correios ou Transportadora Própria.'),
  bullet('Cada lojista pode cadastrar como entrega seus produtos — várias opções são possíveis, por exemplo: Correios PAC + Correios SEDEX + Transportadora Própria 1 + Transportadora Própria 2.'),
  bullet('Na hora do checkout o cliente escolhe qual transportadora ele quer; cada opção tem um valor de frete e um tempo de entrega diferentes. Prazos e valores são customizados apenas se for Transportadora Própria.'),
  bullet('O cálculo é baseado em peso cubado do pacote e faixas de CEP. Você cadastra as combinações que quiser. Também é possível colocar um "valor por kilo adicional", caso não haja limite superior de peso na entrega.'),

  block('h2', 'César Bueno conta sobre como funciona o fluxo do cliente no site'),
  block('blockquote', '"O cliente visualiza a vitrine, mas para adicionar produtos ao carrinho é preciso fazer login. Uma vez logado, o cliente escolhe um de seus estabelecimentos cadastrados no sistema e também pode cadastrar novos. Só é permitido navegar no site com um estabelecimento selecionado. Assim a vitrine mostra apenas os produtos que estão disponíveis naquela região.\n\nO cliente adiciona os produtos no carrinho — pode adicioná-los pela home, busca, pelo autocomplete da busca, pela Lista de desejos ou pelas páginas de categoria, como quiser.\n\nSatisfazendo os limites de pedidos mínimos de cada lojista, o cliente é permitido de seguir para o checkout. No checkout é exibido um resumo do pedido, qual o estabelecimento que ele escolheu (que é onde será entregue o pedido), as opções de envio (se tiver mais de uma) e as formas de pagamento.\n\nUma vez realizado o pedido, o cliente recebe um e-mail confirmando o pedido e, para cada atualização de status, recebe um e-mail também.\n\nPor fim, um acontecimento recente que causou mudanças foi a abertura do iFood Shop ao público — anteriormente era fechado para restaurantes do iFood somente. Devido ao COVID-19, aumentaram os pedidos para entrar no Shop, e eles optaram por abrir ao invés de trabalhar como benefício exclusivo para quem está no iFood."'),
  block('normal', 'César Bueno – Techlead Stoom'),
  block('normal', 'Esta foi uma breve explanação das características de um grande case de inovação em marketplaces B2B com tecnologia Stoom. Para saber mais sobre como ter uma plataforma personalizável no nível tecnológico, entre em contato com um de nossos especialistas através do nosso formulário.'),
]

async function run() {
  const doc = await client.fetch(`*[_type == "case" && slug.current == "ifood-shop"][0] { _id, titulo }`)
  if (!doc) { console.error('Case ifood-shop não encontrado.'); process.exit(1) }
  console.log(`Atualizando: ${doc.titulo} (${doc._id})`)
  await client.patch(doc._id).set({ corpo }).commit()
  console.log(`Pronto! ${corpo.length} blocos escritos.`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
