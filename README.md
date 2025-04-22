[![AjudaSocial_API - Live](https://img.shields.io/badge/API-Live-green)](https://ajudasocial-api-yxbj.onrender.com)
![MIT](https://img.shields.io/badge/license-MIT-blue)
# AjudaSocial_API

<i>Conectando pessoas em situação de vulnerabilidade a serviços essenciais</i>

# 🎯 Objetivo
A AjudaSocial_API é uma solução tecnológica criada para conectar pessoas em situação de vulnerabilidade social (como moradores de rua, desabrigados ou indivíduos em risco) a serviços de apoio essenciais. Muitas vezes, ao nos depararmos com alguém que precisa de ajuda, não sabemos como agir ou quais instituições podem auxiliar. Esta API centraliza informações sobre locais e organizações que oferecem suporte em áreas como:

🍛 Alimentação (restaurantes populares, bancos de alimentos)

🏠 Abrigo e moradia temporária

🩺 Assistência médica e psicológica

📝 Ajuda jurídica e documentação

<i>"Facilitar o acesso a recursos que salvam vidas, conectando quem precisa de ajuda a quem pode oferecer."</i>

# 🚀 Rotas da API
Endpoints principais
- >Rota raiz:
https://ajudasocial-api-yxbj.onrender.com

    - Redireciona para a documentação /api-docs

- Lista completa de recursos
https://ajudasocial-api-yxbj.onrender.com/recursos

    - Retorna todos os serviços cadastrados /recursos

- Filtrar por tipo de serviço
https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/{tipo}
    - /recursos/tipo/{tipo}
    - Exemplo:

        https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/alimentação

        https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/abrigo

- Filtrar por cidade
https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/{cidade}
    - Exemplo: /recursos/cidade/{cidade}

    - https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/Curitiba

    - https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/Fortaleza

- Documentação interativa 
https://ajudasocial-api-yxbj.onrender.com/api-docs

<i>💡Explore todos os endpoints via Swagger UI</i>
# 💻 Como Usar

# 1. Teste online
Acesse os links acima ou explore via Swagger UI:

[🔗 Documentação Interativa](https://ajudasocial-api-yxbj.onrender.com/api-docs/) 

# 2. Execute localmente
````bash
# Clone o repositório
git clone https://github.com/DaihSeven/AjudaSocial_API.git

# Instale as dependências
npm install

# Configure o .env (crie um arquivo .env baseado no .env.example)
cp .env.example .env

# Inicie o servidor
npm start
Acesse: http://localhost:3000

#rotas
/api-docs
/recursos
/recursos/tipo/{tipo}
/recursos/localizacao/{localizacao}
/recursos/cidade/{cidade}
/recursos/cidade/{cidade}/{tipo}
/recursos/cidade/{cidade}/localizacao/{localizacao}
/recursos/cidade/{cidade}/{tipo}/{localizacao}
````

# 📊 Tecnologias Utilizadas
Backend: Node.js + Express

Documentação: Swagger/OpenAPI

Deploy: Render.com

Banco de Dados: JSON (mock inicial)

# 🛠️ Estrutura do projeto 

````bash
AjudaSocial_API/

├── src/
│    └── controllers/
│    │  └── RecursoController.js    #Lógica principal das rotas, ponte 
│    └── database/
│    │   └── mockDb.js     #Banco de dados em memória
│    └── docs/
│    │   └── swaggerSpec.js     #documentação Swagger
│    └── models/
│    │   └── recurso.js      #estrutura de dados dos recursos
│    └── routes/
│    │   └── recursoRoutes.routes.js    #os endpoints da API
│    └── services/
│        └── RecursoService.js   #Lógica de negócio, comunicação e regras de manipulação de dados
├── package-lock.json     #versões exatas das dependências
├── package.json      #Configurações do projeto e dependências
├── README.md       #Documentação básica do projeto
├── server.js      #Inicia o servidor

````
# 📌 Próximos Passos

Migração para Banco de Dados real.

Expandir para 10 cidades brasileiras.

Criar um frontend para busca simplificada.

# 💡 Contribua
Envie sugestões de novos recursos via Issues.

Faça um fork e submeta Pull Requests com melhorias.

Reporte erros ou dados desatualizados.
# ✨ Tecnologia a serviço da transformação social.
Acesse agora: https://ajudasocial-api-yxbj.onrender.com

### 👩🏻‍💻 Autora Daiane das Graças Barbosa Koslowski
