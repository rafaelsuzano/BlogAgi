
# 🧪 Automação de Testes com Cypress – Busca de Artigos no Blog Agibank

Este projeto apresenta a automação de testes end-to-end com **Cypress**, aplicada à funcionalidade de **busca de artigos** no blog oficial do Agibank:  
🔗 [https://blog.agibank.com.br](https://blog.agibank.com.br)

O objetivo é validar, por meio de testes funcionais automatizados, se a experiência de busca atende aos critérios de usabilidade, retorno coerente de dados e tratamento adequado de exceções.  

📁 Repositório no GitHub: [github.com/rafaelsuzano/BlogAgi](https://github.com/rafaelsuzano/BlogAgi.git)

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como parte de uma **avaliação técnica profissional** com foco em:

- Aplicação prática de automação com **Cypress**
- Simulação de comportamento real do usuário
- Validação funcional de uma aplicação web
- Documentação clara, objetiva e profissional

---

## 🛠️ Tecnologias Utilizadas

- [Cypress 13.x](https://docs.cypress.io) – Automação end-to-end

- JavaScript (ES6+)

- Node.js 18+

- HTML/CSS (apenas leitura da estrutura DOM)

- VSCode (IDE recomendada)

---

## 📚 Cenários Automatizados

### ✅ Cenário 1 – Busca por termo relevante ("Pix")

**Objetivo:** Verificar se a busca retorna artigos coerentes com a palavra-chave inserida.

- Acessar o blog

- Digitar "Pix" no campo de busca

- Validar que pelo menos um artigo é exibido

- Verificar se o termo pesquisado aparece no título ou no corpo do artigo

---

### ❌ Cenário 2 – Busca por termo inexistente ("xpto123")

**Objetivo:** Validar o tratamento de termos irrelevantes ou sem correspondência.

- Acessar o blog

- Digitar "xpto123" no campo de busca

- Verificar que nenhum resultado é exibido

- Validar a exibição de uma mensagem de "nenhum resultado encontrado" ou equivalente

---

### 🆗 Cenário 3 – Abertura de artigo a partir da busca

**Objetivo:** Confirmar que os links de artigos retornados estão funcionando corretamente.

- Realizar uma busca por "Cartão"

- Clicar no primeiro resultado exibido

- Verificar se o conteúdo do artigo foi carregado com sucesso

---

### 📌 Cenário 4 – Termo genérico com muitos resultados

**Objetivo:** Testar a paginação ou quantidade de resultados retornados.

- Buscar por "Conta"

- Verificar se múltiplos resultados são listados

- Validar se os artigos listados estão relacionados ao termo buscado

---

### ⛔ Cenário 5 – Campo de busca vazio

**Objetivo:** Verificar o comportamento da aplicação ao submeter a busca em branco.

- Acessar o blog

- Clicar no botão de busca sem digitar nenhum termo

- Verificar se ocorre alguma ação inesperada, redirecionamento ou erro no console

---

## 📁 Estrutura do Projeto

```plaintext
BlogAgi/
├── cypress/
│   ├── e2e/
│   │   └── search/
│   │       └── searchArticles.cy.js      # Casos de teste automatizados
│   │
│   └── support/
│       ├── commands.js                   # (Opcional) Custom commands
│       └── e2e.js                        # Setup global dos testes
│
├── cypress.config.js                     # Configuração principal do Cypress
├── package.json                          # Dependências e scripts
└── README.md                             # Documentação do projeto
````

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/rafaelsuzano/BlogAgi.git
cd BlogAgi
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute os testes em modo interativo (UI)**

```bash
npx cypress open
```

4. **Ou execute em modo headless (linha de comando)**

```bash
npx cypress run
```

---

## 📸 Evidências de Teste

* É possível configurar captura de screenshots automáticas para testes com falha

* Ideal para pipelines CI/CD (GitHub Actions, GitLab CI)

---

## 📌 Sugestões de Expansão

* Cobrir testes de responsividade (mobile/tablet)

* Validar resultados com filtros ou tags (caso o blog permita)

* Testes com interceptações de requisições (`cy.intercept`) para verificar chamadas de API da busca

* Aplicar testes com múltiplos dados de entrada utilizando `.each()` ou dados via `fixture`

---

## 🤝 Contato

📧 [rafaelsuzano@hotmail.com](mailto:rafaelsuzano@hotmail.com)
💼 [LinkedIn – Rafael Suzano Cruz](https://www.linkedin.com/in/rafaelsuzano/)
🔗 Repositório: [github.com/rafaelsuzano/BlogAgi](https://github.com/rafaelsuzano/BlogAgi.git)

---

