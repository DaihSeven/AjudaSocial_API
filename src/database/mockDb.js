// src/database/mockDb.js
const recursos = [
    {
      id: 1,
      nome: 'Restaurante Comunitário',
      tipo: ['alimentação'],
      endereco: 'Zona Leste',
      cidade: "São Paulo",
      horario: 'Segunda a sexta, das 11h às 14h',
      contato: '(11) 3356-7894'
    },
    {
      id: 2,
      nome: 'Abrigo Esperança',
      tipo: ['abrigo'],
      endereco: 'Zona Norte',
      cidade: "São Paulo",
      horario: 'Segunda a domingo, das 18h às 08h',
      contato: '(11) 3344-5566'
    },
    {
      id: 3,
      nome: 'Centro de Apoio Social',
      tipo: ['apoio psicológico'],
      endereco: 'Jardim Botânico',
      cidade: "Curitiba",
      horario: 'Segunda a sexta, das 08h às 16h',
      contato: '(11) 3399-8877'
    },
    {
      id: 4,
      nome: "Casa de Apoio Esperança",
      tipo: ["refeição", "banho"],
      endereco: "Rua Exemplo, 123 - SP",
      cidade: "São Paulo",
      horario: "08h às 20h",
      contato: "(11) 99999-9999"
    },
    {
      id: 5,
      nome: "Centro Solidário",
      tipo: ["abrigo", "atendimento médico"],
      endereco: "Av. Central, 456 - SP",
      cidade: "São Paulo",  
      horario: "24h",
      contato: "(11) 98888-8888"
    },
    //adicionar mais locais e reais
    //escolher uma cidade, SP está no ranking assim como Fortaleza e curitiba
    
  ];
  
  export default recursos;
  