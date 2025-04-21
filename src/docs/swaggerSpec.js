const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'AjudaSocial_API',
    version: '1.0.0',
    description: 'API que conecta pessoas em situação de vulnerabilidade a serviços essenciais como abrigos, alimentação e assistência jurídica',
    "contact": {
      "name": 'DaihSeven',
      "url": 'https://github.com/DaihSeven/AjudaSocial_API.git'
    },
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local de desenvolvimento',
    },
    {
      url: 'https://api.ajudasocial.org/v1',//trocar o link
      description: 'Servidor de produção'
    }
  ],
  tags: [
    {
      name: 'Recursos',
      description: 'Operações relacionadas a recursos de assistência social'
    },
    {
      name: 'Filtros',
      description: 'Endpoints para filtrar recursos por diferentes critérios'
    }
  ],
  paths: {
    '/recursos': {
      get: {
        tags: ['Recursos'],
        summary: 'Lista todos os recursos disponíveis',
        description: 'Retorna uma lista completa de todos os recursos cadastrados no sistema',
        responses: {
          200: {
            description: 'Lista de recursos retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Recurso'
                  }
                }
              }
            }
          },
          500: {
            description: 'Erro interno do servidor'
          }
        }
      }
    },
    '/recursos/tipo/{tipo}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por tipo de serviço',
        description: 'Retorna recursos que oferecem um tipo específico de serviço (ex: alimentação, abrigo)',
        parameters: [
          {
            in: 'path',
            name: 'tipo',
            required: true,
            schema: {
              type: 'string',
              enum: ['alimentação', 'abrigo', 'apoio psicológico', 'documentação', 'apoio socioassistencial']
            },
            description: 'Tipo de serviço a ser filtrado',
            example: 'alimentação'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por tipo retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Recurso'
                  }
                }
              }
            }
          },
          404: {
            description: 'Nenhum recurso encontrado para o tipo especificado'
          }
        }
      }
    },
    '/recursos/localizacao/{localizacao}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por localização aproximada',
        description: 'Retorna recursos localizados na área especificada (bairro, região ou ponto de referência)',
        parameters: [
          {
            in: 'path',
            name: 'localizacao',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Localização para filtrar os recursos',
            example: 'Centro'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por localização retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Recurso'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/recursos/cidade/{cidade}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por cidade',
        description: 'Retorna todos os recursos disponíveis em uma determinada cidade',
        parameters: [
          {
            in: 'path',
            name: 'cidade',
            required: true,
            schema: {
              type: 'string',
              enum: ['Fortaleza', 'São Paulo', 'Curitiba']
            },
            description: 'Cidade para filtrar os recursos',
            example: 'São Paulo'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por cidade retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/RecursoCidade'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/recursos/{cidade}/{tipo}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por cidade e tipo de serviço',
        description: 'Retorna recursos de um tipo específico em uma determinada cidade',
        parameters: [
          {
            in: 'path',
            name: 'cidade',
            required: true,
            schema: {
              type: 'string',
              enum: ['Fortaleza', 'São Paulo', 'Curitiba']
            },
            description: 'Cidade para filtrar os recursos',
            example: 'Curitiba'
          },
          {
            in: 'path',
            name: 'tipo',
            required: true,
            schema: {
              type: 'string',
              enum: ['alimentação', 'abrigo', 'apoio psicológico', 'documentação', 'apoio socioassistencial']
            },
            description: 'Tipo de serviço a ser filtrado',
            example: 'abrigo'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por cidade e tipo retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/RecursoCidadeTipo'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/recursos/{cidade}/localizacao/{localizacao}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por cidade e localização específica',
        description: 'Retorna recursos em uma cidade filtrados por localização mais específica (bairro, região)',
        parameters: [
          {
            in: 'path',
            name: 'cidade',
            required: true,
            schema: {
              type: 'string',
              enum: ['Fortaleza', 'São Paulo', 'Curitiba']
            },
            description: 'Cidade para filtrar os recursos',
            example: 'Fortaleza'
          },
          {
            in: 'path',
            name: 'localizacao',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Localização mais específica para filtrar',
            example: 'Centro'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por cidade e localização retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/RecursoCidadeLocal'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/recursos/{cidade}/{tipo}/{localizacao}': {
      get: {
        tags: ['Filtros'],
        summary: 'Filtra recursos por cidade, tipo e localização',
        description: 'Retorna recursos filtrados por todos os critérios: cidade, tipo de serviço e localização específica',
        parameters: [
          {
            in: 'path',
            name: 'cidade',
            required: true,
            schema: {
              type: 'string',
              enum: ['Fortaleza', 'São Paulo', 'Curitiba']
            },
            description: 'Cidade para filtrar os recursos',
            example: 'São Paulo'
          },
          {
            in: 'path',
            name: 'tipo',
            required: true,
            schema: {
              type: 'string',
              enum: ['alimentação', 'abrigo', 'apoio psicológico', 'documentação', 'apoio socioassistencial']
            },
            description: 'Tipo de serviço a ser filtrado',
            example: 'alimentação'
          },
          {
            in: 'path',
            name: 'localizacao',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Localização mais específica para filtrar',
            example: 'Campos Elíseos'
          }
        ],
        responses: {
          200: {
            description: 'Recursos filtrados por todos os critérios retornados com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/RecursoCidadeTipoLocal'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Recurso: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 15
          },
          nome: {
            type: 'string',
            example: 'Restaurante Popular'
          },
          tipo: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['alimentação']
          },
          endereco: {
            type: 'string',
            example: 'Praça Rui Barbosa - Centro, Curitiba - PR'
          },
          cidade: {
            type: 'string',
            example: 'Curitiba'
          },
          horario: {
            type: 'string',
            example: 'segunda a sexta-feira, das 12h às 14h almoço, e ás 18h jantar'
          },
          contato: {
            type: 'string',
            example: '(41) 3322-3574'
          }
        }
      },
      RecursoCidade: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 12
          },
          nome: {
            type: 'string',
            example: 'Centro POP BELA VISTA'
          },
          tipo: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['abrigo', 'apoio socioassistencial']
          },
          endereco: {
            type: 'string',
            example: 'Rua Jandaia, 30 - Bela Vista, CENTRO São Paulo- SP'
          },
          cidade: {
            type: 'string',
            example: 'São Paulo'
          },
          horario: {
            type: 'string',
            example: 'segunda a sexta, 8h às 17h'
          },
          contato: {
            type: 'string',
            example: '(11) 3104-0423/2292 / creaspopbelavista@prefeitura.sp.gov.br'
          }
        }
      },
      RecursoCidadeTipo: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 18
          },
          nome: {
            type: 'string',
            example: 'CES Central Encaminhamento Social 24h - Procura Espontânea'
          },
          tipo: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['abrigo','orientação', 'apoio socioassistencial']
          },
          endereco: {
            type: 'string',
            example: 'Rua Francisco Torres, 500 - Centro'
          },
          cidade: {
            type: 'string',
            example: 'Curitiba'
          },
          horario: {
            type: 'string',
            example: '7h às 19h'
          },
          contato: {
            type: 'string',
            example: 'Através da Central 156'
          }
        }
      },
      RecursoCidadeLocal: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 3
          },
          nome: {
            type: 'string',
            example: 'Centro de Atenção Psicossocial Álcool e outras Drogas - CAPS AD'
          },
          tipo: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['apoio psicológico', 'apoio para dependentes']
          },
          endereco: {
            type: 'string',
            example: 'Rua Dona Leopoldina, 8, CENTRO 60110-000'
          },
          cidade: {
            type: 'string',
            example: 'Fortaleza'
          },
          horario: {
            type: 'string',
            example: 'Segunda à sexta: 8h às 17h'
          },
          contato: {
            type: 'string',
            example: '(85) 3105 1164 / 3452 6619'
          }
        }
      },
      RecursoCidadeTipoLocal: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 8
          },
          nome: {
            type: 'string',
            example: 'Bom Prato de Campos Elíseos'
          },
          tipo: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['alimentação', 'preço baixo']
          },
          endereco: {
            type: 'string',
            example: 'R. Gen. Júlio Marcondes Salgado, 56 - Campos Elíseos, São Paulo - SP, 01201-020'
          },
          cidade: {
            type: 'string',
            example: 'São Paulo'
          },
          horario: {
            type: 'string',
            example: 'segunda a domingo, 7h30min às 19h'
          },
          contato: {
            type: 'string',
            example: '(11) 2763-8040'
          }
        }
      }
    }
  }
};

export default swaggerSpec;