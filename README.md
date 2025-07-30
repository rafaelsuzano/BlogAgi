

# 🔎 Testes Automatizados de Busca no Blog Agibank


## 🎯 Sobre o Projeto

Este projeto tem como principal objetivo **garantir a qualidade e a funcionalidade da busca do Blog Agibank** por meio de **testes automatizados end-to-end**. Desenvolvido com **Cypress**, uma ferramenta de testes moderna e poderosa, e seguindo o padrão de design **Page Object Model (POM)**, ele oferece uma suíte de testes robusta que simula cenários reais de usuários.

A automação da busca é crucial para o Blog Agibank, pois assegura que os leitores possam encontrar o conteúdo desejado de forma eficiente. Com este projeto, buscamos:

  * **Identificar rapidamente regressões:** Qualquer alteração na funcionalidade de busca que possa comprometer a experiência do usuário será detectada de forma ágil.
  * **Assegurar uma experiência de usuário consistente:** Garante que os usuários encontrem facilmente artigos e informações relevantes.
  * **Otimizar o processo de desenvolvimento:** Reduz a necessidade de testes manuais repetitivos, liberando tempo para a equipe focar em melhorias e novas funcionalidades.
  * **Aumentar a confiabilidade:** Garante que o recurso de busca funcione conforme o esperado em diversas situações.

Este repositório é uma ferramenta essencial para a manutenção da excelência e confiabilidade do Blog Agibank.

-----

## 🚀 Tecnologias Utilizadas

  * **Cypress**: Framework de testes end-to-end de nova geração.
  * **JavaScript**: Linguagem de programação utilizada para escrever os testes.
  * **Node.js**: Ambiente de execução para o JavaScript, necessário para o Cypress.
  * **Page Object Model (POM)**: Padrão de design para organizar os elementos e interações da página, promovendo reusabilidade e manutenibilidade do código de teste.

-----

## 📦 Estrutura do Projeto

A estrutura do projeto segue as convenções recomendadas pelo Cypress, com a adição de um diretório específico para os Page Objects, a fim de implementar o padrão POM de forma clara e organizada.

```
.
├── cypress/
│   ├── e2e/
│   │   └── blogSearch.cy.js             # Arquivo principal com os cenários de testes
│   └── support/
│       └── pages/
│           └── BlogSearchPage.js        # Page Object para a página de busca do blog
│       └── commands.js                  # Arquivo para comandos customizados (se houver)
├── node_modules/                        # Dependências do projeto (gerada após 'npm install')
├── package.json                         # Gerenciador de dependências e scripts do projeto
├── package-lock.json                    # Bloqueia as versões exatas das dependências
└── README.md                            # Este arquivo
```

  * **`cypress/e2e/blogSearch.cy.js`**: Contém os testes de alto nível que descrevem o comportamento esperado da funcionalidade de busca.
  * **`cypress/support/pages/BlogSearchPage.js`**: Implementa o Page Object para a página de busca do blog. Ele encapsula seletores de elementos e métodos de interação específicos dessa página, tornando os testes mais legíveis e fáceis de manter.

-----

## ⚙️ Configuração

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.

-----

## 🧪 Como Executar os Testes

Para executar os testes, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/rafaelsuzano/BlogAgi.git
    cd BlogAgi
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou, se você usa yarn:
    yarn install
    ```

3.  **Abra o Cypress Test Runner:**

    ```bash
    npx cypress open
    ```

    Após executar o comando, uma interface gráfica do Cypress será aberta.

      * Selecione `E2E Testing`.
      * Escolha o navegador de sua preferência.
      * Na lista de especificações, clique em `blogSearch.cy.js` para iniciar a execução dos testes. Você poderá acompanhar a execução passo a passo no navegador.

4.  **Executar testes em modo "headless" (terminal):**
    Para executar os testes sem abrir a interface gráfica do Cypress, utilize o seguinte comando:

    ```bash
    npx cypress run
    ```

    Os resultados da execução serão exibidos diretamente no terminal.

-----

## 📝 Cenários de Teste

Os testes cobrem os seguintes cenários de busca no Blog Agibank:

### Cenário 1: Busca por termo sem resultados

  * **Descrição:** Verifica o comportamento da busca ao inserir um termo que não retorna nenhum resultado.
  * **Termo de Busca:** `tttt`
  * **Validação:** Garante que a mensagem de "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras." seja exibida corretamente.

### Cenário 2: Busca por termo relevante com resultados

  * **Descrição:** Testa a busca com um termo que deve retornar resultados esperados.
  * **Termo de Busca:** `INSS`
  * **Validação:** Confirma que a área de resultados da busca (`.search-results, article`) é exibida e visível.

### Cenário 3: Navegação para um post a partir dos resultados da busca

  * **Descrição:** Simula um usuário buscando por um termo e clicando em um dos resultados para acessar o post correspondente.
  * **Termo de Busca:** `inss`
  * **Ação:** Clica no primeiro resultado de busca que contém o título "Como consultar número do benefício INSS?".
  * **Validação:** Verifica se a página do post correto é carregada e se o título do artigo ("Como consultar número do benefício INSS?") está visível na página.

-----

## ✨ Boas Práticas e Padrões

Este projeto incorpora as seguintes boas práticas:

  * **Page Object Model (POM):**
      * **Separação de Preocupações:** Os seletores de elementos e as ações da página são encapsulados em classes de Page Objects, mantendo os testes limpos e focados apenas na lógica do cenário.
      * **Reusabilidade:** Métodos e seletores são reutilizados em diferentes testes, reduzindo a duplicação de código.
      * **Manutenibilidade:** Alterações na UI da aplicação exigem modificações apenas no Page Object relevante, e não em múltiplos arquivos de teste.
  * **Testes Independentes:** Cada `it` block (cenário de teste) é projetado para ser independente dos outros, garantindo que a falha de um teste não afete o resultado de outro.
  * **Seletores Robustos:** Preferência por seletores que sejam menos propensos a quebrar com mudanças na UI (ex: `data-testid` ou seletores de texto visível, como `cy.contains`).
  * **Nomes Descritivos:** Os nomes dos `describe` e `it` blocks são claros e autoexplicativos, facilitando a compreensão do que cada teste faz.
  * **`beforeEach` Hook:** Utilizado para definir pré-condições (como a visita à página inicial) antes de cada teste, garantindo um estado limpo para cada execução.

-----

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma *issue* neste repositório\!
