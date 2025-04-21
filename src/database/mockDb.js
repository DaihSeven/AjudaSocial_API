// src/database/mockDb.js
const recursos = [
  {
    id: 1,
    nome: 'Restaurante Popular de Fortaleza',
    tipo: ['alimentação'],
    endereco: 'Rua Carlos Amora, 07, PARANGABA 60740-101',
    cidade: 'Fortaleza',
    horario: 'segunda a sexta, 10h às 14h',
    contato: 'Secretaria dos Direitos Humanos e Desenvolvimento Social: (85) 3484-8991'
  },
  {
    id: 2,
    nome: 'Centro de Atenção Psicossocial Álcool e outras Drogas - CAPS AD',
    tipo: ['apoio psicológico', 'apoio para dependentes'],
    endereco: 'Rua General Bernardo Figueiredo, 1991, AMADEU FURTADO 60060-170',
    cidade: 'Fortaleza',
    horario: 'Segunda à sexta: 8h às 17h',
    contato: '(85) 3105 1164 / 3452 6619'
  },
  {
    id: 3,
    nome: 'Centro de Atenção Psicossocial Álcool e outras Drogas - CAPS AD',
    tipo: ['apoio psicológico', 'apoio para dependentes'],
    endereco: 'Saúde Mental - CAPS AD Rua Dona Leopoldina, 8, CENTRO 60110-000',
    cidade: 'Fortaleza',
    horario: 'Segunda à sexta: 8h às 17h',
    contato: '(85) 3105 1164 / 3452 6619'
  },
  {
    id: 4,
    nome: 'CLÍNICA ESCOLA DE PSICOLOGIA - Universidade Federal do Ceará (UFC)',
    tipo: ['apoio psicológico'],
    endereco: 'Rua Waldery Uchôa, 3A, Benfica.',
    cidade: 'Fortaleza',
    horario: 'Terça-feira, senhas: 07h 30 min, atendimento das 08h às 17h',
    contato: '(85) 3366-7690'
  },
  {
    id: 5,
    nome: 'Unidade de Abrigo de Idosos',
    tipo: ['Abrigo', 'idosos'],
    endereco: 'Av. Olavo Bilac, 1.280 – Alagadiço (São Gerardo)',
    cidade: 'São Paulo',
    horario: 'Sem horário especificado',
    contato: '(85) 3101.2732/2733'
  },
  {
    id: 6,
    nome: 'Centro de Referência Especializado para População em Situação de Rua (Centro Pop)',
    tipo: ['abrigo', 'apoio socioassistencial', 'orientação'],
    endereco: 'Rua Jaime Benévolo, 1059, CENTRO 60050-081',
    cidade: 'Fortaleza',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: ' (85) 3484-8991'
  },
  {
    id: 7,
    nome: 'CAEI (Centro de Acolhida Especial para Idosos)',
    tipo: ['abrigo', 'idosos'],
    endereco: 'Rua da Glória, 312, Centro',
    cidade: 'São Paulo',
    horario: '24 horas por dia.',
    contato: '(11) 3105-5519'
  },
  {
    id: 8,
    nome: 'Bom Prato de Campos Elíseos',
    tipo: ['alimentação', 'preço baixo'],
    endereco: 'R. Gen. Júlio Marcondes Salgado, 56 - Campos Elíseos, São Paulo - SP, 01201-020',
    cidade: 'São Paulo',
    horario: 'segunda a domingo, 7h30min às 19h',
    contato: ' (11) 2763-8040'
  },
  {
    id: 9,
    nome: 'CAPS AD III BORACEA (centro de atenção psicossocial álcool e drogas)',
    tipo: ['ajuda psicossocial', 'álcool', 'drogas', 'apoio psicológico'],
    endereco: 'R. Anhanguera, 288 - Barra Funda, São Paulo - SP, 01135-000',
    cidade: 'São Paulo',
    horario: '24h',
    contato: '(11) 5242-3363/ capsadboracea@afne.org.br'
  },
  {
    id: 10,
    nome: 'Defensoria Pública do Estado de São Paulo',
    tipo: ['documentação', 'defensoria pública'],
    endereco: 'R. Boa Vista, 150 - Centro Histórico de São Paulo, São Paulo - SP, 01014-000',
    cidade: 'São Paulo',
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(11) 3106-4552'
  },
  {
    id: 11,
    nome: 'CIC Casa da Cidadania',
    tipo: ['apoio socioassistencial ', 'orientação'],
    endereco: 'Rodovia dos Imigrantes, 11 - Km 11,5, Casa 9 - Vila Guarani (Z Sul), São Paulo - SP',
    cidade: 'São Paulo',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(11) 4635-8201 / ciccasadacidadania@justica.sp.gov.br'
  },
  {
    id: 12,
    nome: 'Centro POP BELA VISTA',
    tipo: ['abrigo', 'apoio socioassistencial'],
    endereco: 'Rua Jandaia, 30 - Bela Vista, CENTRO São Paulo- SP',
    cidade: 'São Paulo',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(11) 3104-0423/2292 / creaspopbelavista@prefeitura.sp.gov.br'
  },
  {
    id: 13,
    nome: 'Coordenadoria de Serviço Especializado de Acolhimento Pop Rua',
    tipo: ['apoio socioassistencial', 'orientação'],
    endereco: 'online - Curitiba - PR',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(41)3350-3500/ fas@curitiba.pr.gov.br'
  },
  {
    id: 14,
    nome: ' Mesa Solidária Luz dos Pinhais',
    tipo: ['alimentação'],
    endereco: 'Rua Barão do Serro Azul, 81, esquina com a Travessa Nestor de Castro (atrás da Catedral).',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta-feira, das 12h às 14h almoço, e ás 18h jantar',
    contato: '(41) 3350-3853'
  },
  {
    id: 15,
    nome: 'Restaurante Popular',
    tipo: ['alimentação'],
    endereco: 'Praça Rui Barbosa - Centro, Curitiba - PR',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta-feira, das 12h às 14h almoço, e ás 18h jantar',
    contato: '(41) 3322-3574'
  },
  {
    id: 16,
    nome: 'Centro de Atenção Psicossocial Territorial Bairro Novo',
    tipo: ['apoio psicológico', 'psicossocial'],
    endereco: 'AL. NOSSA SENHORA DO SAGRADO CORAÇÃO, 771 - Bairro Novo',
    cidade: 'Curitiba',  
    horario: 'Diariamente, das 7h às 19h',
    contato: '(41) 3349-7644 / 3227-4309 / 99559-1318 / ouvidoria@sms.curitiba.pr.gov.br'
  },
  {
    id: 17,
    nome: 'Centro POP Solidariedade',
    tipo: ['documentação', 'orientação', 'apoio socioassistencial'],
    endereco: 'Rua Engenheiro Rebouças, 845, Jardim Botânico (Praça Plínio Tourinho)',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(41) 3262-0392'
  },
  {
    id: 18,
    nome: 'CES Central Encaminhamento Social 24h - Procura Espontânea',
    tipo: ['abrigo', 'orientação', 'apoio socioassistencial'],
    endereco: 'Rua Francisco Torres, 500 - Centro',
    cidade: 'Curitiba',
    horario: '7h às 19h',
    contato: 'Através da Central 156'
  },
  {
    id: 19,
    nome: 'Centro de Referência Especializado para População em Situação de Rua (Centro Pop)',
    tipo: ['abrigo', 'apoio socioassistencial', 'orientação'],
    endereco: 'Rua Jaime Benévolo, 1059, CENTRO 60050-081',
    cidade: 'Fortaleza',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: ' (85) 3484-8991'
  },
  {
    id: 20,
    nome: 'Casa de Passagem Casas de Mulheres',
    tipo: ['abrigo', 'apoio socioassistencial', 'higiene', 'mulheres'],
    endereco: 'Rua Desembargador Westphalen, 1845 - Rebouças',
    cidade: 'Curitiba',  
    horario: '24h',
    contato: ' (41) 3333-2215'
  },
  {
    id: 21,
    nome: 'Casa de Passagem Boqueirão - Masculino',
    tipo: ['abrigo', 'higiene', 'apoio socioassistencial'],
    endereco: 'Rua Oliveira Viana, 1804 - Boqueirão',
    cidade: 'Curitiba',  
    horario: '24h',
    contato: '(41) 3363-1771'
  },
  {
    id: 22,
    nome: 'Centro Pop Matriz',
    tipo: ['documentação', 'orientação jurídica', 'apoio socioassistencial'],
    endereco: 'R. Piquiri, 698 - Rebouças, Curitiba - PR, 80230-130',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: ' (11) 3227-6647'
  },
  {
    id: 23,
    nome: 'Defensoria Pública do Estado do Paraná - Sede Central de Curitiba',
    tipo: ['defensoria', 'juridico', 'documentação'],
    endereco: 'R. José Bonifácio, 66 - Centro, Curitiba - PR, 80020-130',
    cidade: 'Curitiba',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(41) 3219-7300'
  },
  {
    id: 24,
    nome: 'Vida Na Rua',
    tipo: ['apoio socioassistencial', 'orientação profissional', 'alimentação'],
    endereco: 'Rua Engenheiro Paulino Francisco de Carvalho, 81. Vila Formosa, São Paulo - SP',
    cidade: 'Curitiba',
    horario: '7h às 19h',
    contato: '(11) 9 8198-7456'
  },
  {
    id: 25,
    nome: 'Defensoria Pública do Estado do Ceará',
    tipo: ['documentação', 'juridico', 'defensoria'],
    endereco: 'Av. Pinto Bandeira, nº 1.111, Bairro Luciano Cavalcante, Fortaleza – CE, CEP 60.811-170',
    cidade: 'Fortaleza',  
    horario: 'segunda a sexta, 8h às 17h',
    contato: '(85) 3194-5000'
  }
];

export default recursos;