[![AjudaSocial_API - Live](https://img.shields.io/badge/API-Live-green)](https://ajudasocial-api-yxbj.onrender.com)


# AjudaSocial_API

Conectando pessoas em situação de vulnerabilidade a serviços essenciais

# 📌 Problema

Dados alarmantes sobre vulnerabilidade social no Brasil
Segundo o IPEA (2023), o Brasil tem mais de 281 mil pessoas em situação de rua, com crescimento de 38% desde 2019.

86% dos municípios brasileiros não possuem sistemas centralizados de informações sobre serviços sociais (Fonte: IBGE, 2022).

Em pesquisa realizada para este projeto, identificou-se que:

Curitiba destaca-se como a cidade com o melhor hub de informações (dados acessíveis via APIs municipais).

70% das ONGs relatam dificuldade em atualizar informações em tempo real para quem precisa de ajuda.

# 🎯 Objetivo
A AjudaSocial_API é uma solução tecnológica criada para conectar pessoas em situação de vulnerabilidade social (como moradores de rua, desabrigados ou indivíduos em risco) a serviços de apoio essenciais. Muitas vezes, ao nos depararmos com alguém que precisa de ajuda, não sabemos como agir ou quais instituições podem auxiliar. Esta API centraliza informações sobre locais e organizações que oferecem suporte em áreas como:

🍛 Alimentação (restaurantes populares, bancos de alimentos)

🏠 Abrigo e moradia temporária

🩺 Assistência médica e psicológica

📝 Ajuda jurídica e documentação

"Facilitar o acesso a recursos que salvam vidas, conectando quem precisa de ajuda a quem pode oferecer."

# 🛠️ Solução Técnica
Como a API resolve o problema?
Dados unificados: Agrega informações fragmentadas de prefeituras, ONGs e serviços sociais.

Modelo escalável: Pode ser integrado a apps, sites governamentais e plataformas de assistência.

Inspirado em Curitiba: Utiliza a mesma abordagem de hubs centralizados, mas com alcance nacional.

# 🚀 Rotas da API
Endpoints principais
- Rota raiz
https://ajudasocial-api-yxbj.onrender.com

    - Redireciona para a documentação

- Lista completa de recursos
https://ajudasocial-api-yxbj.onrender.com/recursos

    - Retorna todos os serviços cadastrados

- Filtrar por tipo de serviço
https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/{tipo}

    - Exemplo:
https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/alimentação
https://ajudasocial-api-yxbj.onrender.com/recursos/tipo/abrigo

- Filtrar por cidade
https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/{cidade}

    - Exemplo:
https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/Curitiba
https://ajudasocial-api-yxbj.onrender.com/recursos/cidade/São Paulo

- Documentação interativa
https://ajudasocial-api-yxbj.onrender.com/api-docs

Explore todos os endpoints via Swagger UI
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
````
# 3. Contribua
Envie sugestões de novos recursos via Issues.

Faça um fork e submeta Pull Requests com melhorias.

Reporte erros ou dados desatualizados.

# 📊 Tecnologias Utilizadas
Backend: Node.js + Express

Documentação: Swagger/OpenAPI

Deploy: Render.com

Banco de Dados: JSON (mock inicial)

# 📌 Próximos Passos

Migração para Banco de Dados real.

Expandir para 10 cidades brasileiras.

Criar um frontend para busca simplificada.

# ✨ Tecnologia a serviço da transformação social.
Acesse agora: https://ajudasocial-api-yxbj.onrender.com

Estrutura do README.md
Contexto do problema (com dados reais).

Solução proposta (diferenciais técnicos).

Rotas práticas (links diretos).

Instruções claras para uso local/online.

Chamada para ação (como contribuir).

//precisa organizar a ordem do readme e a estrutura de pastas
