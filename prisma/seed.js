// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();
    await prisma.resource.deleteMany();

  await prisma.resource.createMany({
    data: [
 {
    name: 'Restaurante Popular de Fortaleza',
    type: ['alimentação'],
    address: 'Rua Carlos Amora, 07, PARANGABA 60740-101',
    city: 'Fortaleza',
    hours: 'segunda a sexta, 10h às 14h',
    contact: 'Secretaria dos Direitos Humanos e Desenvolvimento Social: (85) 3484-8991'
  },
  {
    name: 'Centro de Atenção Psicossocial Álcool e outras Drogas - CAPS AD',
    type: ['apoio psicológico', 'apoio para dependentes'],
    address: 'Rua General Bernardo Figueiredo, 1991, AMADEU FURTADO 60060-170',
    city: 'Fortaleza',
    hours: 'Segunda à sexta: 8h às 17h',
    contact: '(85) 3105 1164 / 3452 6619'
  },
  {
    name: 'Centro de Atenção Psicossocial Álcool e outras Drogas - CAPS AD',
    type: ['apoio psicológico', 'apoio para dependentes'],
    address: 'Rua Dona Leopoldina, 8, CENTRO 60110-000',
    city: 'Fortaleza',
    hours: 'Segunda à sexta: 8h às 17h',
    contact: '(85) 3105 1164 / 3452 6619'
  },
  {
    name: 'CLÍNICA ESCOLA DE PSICOLOGIA - Universidade Federal do Ceará (UFC)',
    type: ['apoio psicológico'],
    address: 'Rua Waldery Uchôa, 3A, Benfica.',
    city: 'Fortaleza',
    hours: 'Terça-feira, senhas: 07h 30 min, atendimento das 08h às 17h',
    contact: '(85) 3366-7690'
  },
  {
    name: 'Unidade de Abrigo de Idosos',
    type: ['Abrigo', 'idosos'],
    address: 'Av. Olavo Bilac, 1.280 – Alagadiço (São Gerardo)',
    city: 'São Paulo',
    hours: 'Sem horário especificado',
    contact: '(85) 3101.2732/2733'
  },
  {
    name: 'Centro de Referência Especializado para População em Situação de Rua (Centro Pop)',
    type: ['abrigo', 'apoio socioassistencial', 'orientação'],
    address: 'Rua Jaime Benévolo, 1059, CENTRO 60050-081',
    city: 'Fortaleza',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: ' (85) 3484-8991'
  },
  {
    name: 'CAEI (Centro de Acolhida Especial para Idosos)',
    type: ['abrigo', 'idosos'],
    address: 'Rua da Glória, 312, Centro',
    city: 'São Paulo',
    hours: '24 horas por dia.',
    contact: '(11) 3105-5519'
  },
  {
    name: 'Bom Prato de Campos Elíseos',
    type: ['alimentação', 'preço baixo'],
    address: 'R. Gen. Júlio Marcondes Salgado, 56 - Campos Elíseos, São Paulo - SP, 01201-020',
    city: 'São Paulo',
    hours: 'segunda a domingo, 7h30min às 19h',
    contact: ' (11) 2763-8040'
  },
  {
    name: 'CAPS AD III BORACEA (centro de atenção psicossocial álcool e drogas)',
    type: ['ajuda psicossocial', 'álcool', 'drogas', 'apoio psicológico'],
    address: 'R. Anhanguera, 288 - Barra Funda, São Paulo - SP, 01135-000',
    city: 'São Paulo',
    hours: '24h',
    contact: '(11) 5242-3363/ capsadboracea@afne.org.br'
  },
  {
    name: 'Defensoria Pública do Estado de São Paulo',
    type: ['documentação', 'defensoria pública'],
    address: 'R. Boa Vista, 150 - Centro Histórico de São Paulo, São Paulo - SP, 01014-000',
    city: 'São Paulo',
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(11) 3106-4552'
  },
  {
    name: 'CIC Casa da Cidadania',
    type: ['apoio socioassistencial ', 'orientação'],
    address: 'Rodovia dos Imigrantes, 11 - Km 11,5, Casa 9 - Vila Guarani (Z Sul), São Paulo - SP',
    city: 'São Paulo',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(11) 4635-8201 / ciccasadacidadania@justica.sp.gov.br'
  },
  {
    name: 'Centro POP BELA VISTA',
    type: ['abrigo', 'apoio socioassistencial'],
    address: 'Rua Jandaia, 30 - Bela Vista, CENTRO São Paulo- SP',
    city: 'São Paulo',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(11) 3104-0423/2292 / creaspopbelavista@prefeitura.sp.gov.br'
  },
  {
    name: 'Coordenadoria de Serviço Especializado de Acolhimento Pop Rua',
    type: ['apoio socioassistencial', 'orientação'],
    address: 'online - Curitiba - PR',
    city: 'Curitiba',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(41)3350-3500/ fas@curitiba.pr.gov.br'
  },
  {
    name: ' Mesa Solidária Luz dos Pinhais',
    type: ['alimentação'],
    address: 'Rua Barão do Serro Azul, 81, esquina com a Travessa Nestor de Castro (atrás da Catedral).',
    city: 'Curitiba',  
    hours: 'segunda a sexta-feira, das 12h às 14h almoço, e ás 18h jantar',
    contact: '(41) 3350-3853'
  },
  {
    name: 'Restaurante Popular',
    type: ['alimentação'],
    address: 'Praça Rui Barbosa - Centro, Curitiba - PR',
    city: 'Curitiba',  
    hours: 'segunda a sexta-feira, das 12h às 14h almoço, e ás 18h jantar',
    contact: '(41) 3322-3574'
  },
  {
    name: 'Centro de Atenção Psicossocial Territorial Bairro Novo',
    type: ['apoio psicológico', 'psicossocial'],
    address: 'AL. NOSSA SENHORA DO SAGRADO CORAÇÃO, 771 - Bairro Novo',
    city: 'Curitiba',  
    hours: 'Diariamente, das 7h às 19h',
    contact: '(41) 3349-7644 / 3227-4309 / 99559-1318 / ouvidoria@sms.curitiba.pr.gov.br'
  },
  {
    name: 'Centro POP Solidariedade',
    type: ['documentação', 'orientação', 'apoio socioassistencial'],
    address: 'Rua Engenheiro Rebouças, 845, Jardim Botânico (Praça Plínio Tourinho)',
    city: 'Curitiba',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(41) 3262-0392'
  },
  {
    name: 'CES Central Encaminhamento Social 24h - Procura Espontânea',
    type: ['abrigo', 'orientação', 'apoio socioassistencial'],
    address: 'Rua Francisco Torres, 500 - Centro',
    city: 'Curitiba',
    hours: '7h às 19h',
    contact: 'Através da Central 156'
  },
  {
    name: 'Centro de Referência Especializado para População em Situação de Rua (Centro Pop)',
    type: ['abrigo', 'apoio socioassistencial', 'orientação'],
    address: 'Rua Jaime Benévolo, 1059, CENTRO 60050-081',
    city: 'Fortaleza',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: ' (85) 3484-8991'
  },
  {
    name: 'Casa de Passagem Casas de Mulheres',
    type: ['abrigo', 'apoio socioassistencial', 'higiene', 'mulheres'],
    address: 'Rua Desembargador Westphalen, 1845 - Rebouças',
    city: 'Curitiba',  
    hours: '24h',
    contact: ' (41) 3333-2215'
  },
  {
    name: 'Casa de Passagem Boqueirão - Masculino',
    type: ['abrigo', 'higiene', 'apoio socioassistencial'],
    address: 'Rua Oliveira Viana, 1804 - Boqueirão',
    city: 'Curitiba',  
    hours: '24h',
    contact: '(41) 3363-1771'
  },
  {
    name: 'Centro Pop Matriz',
    type: ['documentação', 'orientação jurídica', 'apoio socioassistencial'],
    address: 'R. Piquiri, 698 - Rebouças, Curitiba - PR, 80230-130',
    city: 'Curitiba',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: ' (11) 3227-6647'
  },
  {
    name: 'Defensoria Pública do Estado do Paraná - Sede Central de Curitiba',
    type: ['defensoria', 'juridico', 'documentação'],
    address: 'R. José Bonifácio, 66 - Centro, Curitiba - PR, 80020-130',
    city: 'Curitiba',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(41) 3219-7300'
  },
  {
    name: 'Vida Na Rua',
    type: ['apoio socioassistencial', 'orientação profissional', 'alimentação'],
    address: 'Rua Engenheiro Paulino Francisco de Carvalho, 81. Vila Formosa, São Paulo - SP',
    city: 'Curitiba',
    hours: '7h às 19h',
    contact: '(11) 9 8198-7456'
  },
  {
    name: 'Defensoria Pública do Estado do Ceará',
    type: ['documentação', 'juridico', 'defensoria'],
    address: 'Av. Pinto Bandeira, nº 1.111, Bairro Luciano Cavalcante, Fortaleza – CE, CEP 60.811-170',
    city: 'Fortaleza',  
    hours: 'segunda a sexta, 8h às 17h',
    contact: '(85) 3194-5000'
  },
  //segunda leva
  {
    name: 'Restaurante Popular II - Josué de Castro',
    type: ['alimentação'],
    address: 'Rua Ceará, 490 – Santa Efigênia (região hospitalar)',
    city: 'Belo Horizonte',  
    hours:'7h às 8h – café da manhã, 11h às 14h – almoço, 17h às 18h30 – jantar',
    contact: '30130-003'
  },
  {
    name: 'Restaurante Popular III – Maria Regina Nabuco',
    type: ['alimentação'],
    address: 'Rua Padre Pedro Pinto, 2.277 – Estação BHBus – Venda Nova',
    city: 'Belo Horizonte',
    hours: '11h às 14h – almoço',
    contact: '30130-003'
  },
  {
    name: 'Restaurante Popular IV - Dom Mauro Bastos',
    type: ['alimentação'],
    address: 'Rua Afonso Vaz de Melo, 1.001 – Barreiro',
    city: 'Belo Horizonte',
    hours: '11h às 14h – almoço',
    contact: '30130-003'
  },
  {
    name: 'Refeitório Popular João Bosco Murta Lages',
    type: ['alimentação'],
    address: 'Avenida dos Andradas, 3100 - Santa Efigênia, acesso pela Portaria 3, na Avenida Churchill',
    city: 'Belo Horizonte',
    hours: '11h às 14h – almoço',
    contact: '30130-003'
  },
  {
    name: 'GGSAC-ATBI - Gerência de Gestão dos Serviços de Alta Complexidade do Suas-BH - Albergue Tia Branca I',
    type: ['abrigo', 'acolhimento'],
    address: 'RUA CONSELHEIRO ROCHA, 351, Vila Dias.',
    city: 'Belo Horizonte',
    hours: 'Todos os dias - 00:00 às 08:00 / 17:00 às 23:59',
    contact: '30130-003'
  },
  {
    name: 'GGSAC-ASP - Gerência de Gestão dos Serviços de Alta Complexidade do Suas-BH - Abrigo São Paulo',
    type: ['abrigo', 'acolhimento'],
    address: 'RUA ELETRON, 100, Primeiro de Maio',
    city: 'Belo Horizonte',
    hours: 'Todos os dias - 00:00 às 08:00 / 17:00 às 23:59',
    contact: '30130-003'
  },
  {
    name: ' Centro de Referência da População de Rua | Centro Pop Centro-Sul',
    type: ['alimentação', 'orientação', 'acolhimento', 'abrigo'],
    address: 'Av. do Contorno, 10.852 - Barro Preto',
    city: 'Belo Horizonte',
    hours: 'Dias úteis: 8h às 16h, Sábados, domingos e feriados: 8h às 13h',
    contact: '30130-003'
  },
  {
    name: 'Centro de Referência da População de Rua | Centro Pop Lagoinha',
    type: ['alimentação', 'orientação', 'acolhimento', 'abrigo'],
    address: 'Rua Além Paraíba, 101 - Lagoinha',
    city: 'Belo Horizonte',
    hours: 'Dias úteis: 8h às 17h, Sábados, domingos e feriados: 8h às 12h',
    contact: '30130-003'
  },
  {
    name: ' Centro de Referência da População de Rua | Centro Pop Leste',
    type: ['alimentação', 'orientação', 'acolhimento', 'abrigo'],
    address: 'Rua Conselheiro Rocha, 351 - Floresta',
    city: 'Belo Horizonte',
    hours: 'Dias úteis: 8h às 15h',
    contact: '30130-003'
  },
  {
    name: 'Defensoria Pública de Minas Gerais',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Rua Guajajaras, 1.707, Barro Preto',
    city: 'Belo Horizonte',
    hours: 'Segunda a sexta, 8h às 17h',
    contact: 'atendimento.bh@defensoria.mg.def.br'
  },
  {
    name: 'Núcleo de Assistência Judiciária Gratuita (NAJ) - Passos',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Av. Juca Stockler, 1130, Bairro Belo Horizonte - Passos/MG - CEP 37900-106',
    city: 'Passos',
    hours: 'Segunda a sexta, 8h às 17h',
    contact: 'silvana.garcia@uemg.br'
  },
  {
    name: 'Núcleo de Assistência Judiciária Gratuita (NAJ) - Frutal',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Avenida Escócia, 1001, Bairro Cidade das Águas - Frutal/MG - CEP 38202-436',
    city: 'Frutal',
    hours: 'Segunda a sexta, 8h às 17h',
    contact: 'npj.frutal@uemg.br'
  },
  {
    name: 'Núcleo de Assistência Judiciária Gratuita (NAJ) - Diamantina',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Rua da Glória, nº 394, Centro - Diamantina/MG - CEP 39100-000',
    city: 'Diamantina',
    hours: 'Segunda a sexta, 8h às 17h',
    contact: 'npj.diamantina@uemg.br'
  },
  {
    name: 'Núcleo de Assistência Judiciária Gratuita (NAJ) - Diamantina',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Rua da Glória, nº 394, Centro - Diamantina/MG - CEP 39100-000',
    city: 'Diamantina',
    hours: 'Segunda a sexta, 8h às 17h',
    contact: 'npj.diamantina@uemg.br'
  }, 
  {
    name: 'Núcleo de Assistência Judiciária Gratuita (NAJ) - Ituiutaba',
    type: ['documentação', 'jurídico', 'defensoria'],
    address: 'Rua Vereador Geraldo Moisés da Silva, s/n, Bairro Universitário - Ituiutaba/MG - CEP 38302-192',
    city: 'Ituiutaba',
    hours: '8h às 11h30 / 13h às 17h30',
    contact: 'npj.ituiutaba@uemg.br'
  }
    ]
  });
}


main()
  .then(() => {
    console.log('✅ Dados inseridos com sucesso!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erro ao inserir dados:', e);
    return prisma.$disconnect();
  });
