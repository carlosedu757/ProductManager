# Product Manager - Aplicação de Gerenciamento de Produtos

Esta é uma aplicação Full-Stack desenvolvida para o gerenciamento de produtos. Ela é composta por um backend em **ASP.NET Core Web API** e um frontend em **React**.

---

### Visão Geral

O projeto permite que o usuário realize as seguintes operações:

* **Cadastrar um novo produto** através de um formulário.
* **Visualizar a lista de todos os produtos** cadastrados.

A comunicação entre o frontend e o backend é feita por meio de requisições HTTP REST.

---

### Tecnologias Utilizadas

**Backend:**
* **ASP.NET Core 8.0:** Framework para construção da API.
* **C#:** Linguagem de programação.
* **Swagger/OpenAPI:** Para documentação e teste dos endpoints da API.
* **CORS:** Configurado para permitir requisições do frontend em React.

**Frontend:**
* **React:** Biblioteca JavaScript para construção da interface do usuário.
* **Vite:** Ferramenta de build para o projeto React.
* **HTML/CSS:** Estrutura e estilização da interface.
* **Fetch API:** Para realizar as requisições HTTP ao backend.

---

### Como Rodar a Aplicação

Para rodar a aplicação localmente, você precisa ter o **.NET SDK** e o **Node.js** instalados.

#### 1. Rodando o Backend (API)

1.  Navegue até a pasta `ProductManager` (a pasta do seu projeto .NET Core) no terminal.
2.  Rode o comando:
    ```bash
    dotnet run
    ```
3.  A API será iniciada, geralmente na URL `http://localhost:5016`. Mantenha o terminal rodando.

#### 2. Rodando o Frontend (React)

1.  Em um novo terminal, navegue até a pasta `productmanager`.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie a aplicação React:
    ```bash
    npm run dev
    ```
4.  O frontend será iniciado, geralmente na URL `http://localhost:5173`. Abra essa URL no seu navegador.

A interface do usuário será carregada e você poderá interagir com a aplicação, cadastrando produtos e vendo a lista ser atualizada.

---

### Estrutura do Projeto

* `/ProductManager` (Backend)
    * `/Controllers`
        * `ProdutoController.cs`: Contém os endpoints `POST` e `GET`.
    * `/Models`
        * `Produto.cs`: Classe que representa o modelo de dados do produto.
    * `Program.cs`: Configuração da aplicação, incluindo o serviço de CORS.

* `/product-manager-frontend` (Frontend)
    * `/src`
        * `App.jsx`: Componente principal do React com o formulário e a lista de produtos.
        * `App.css`: Estilização da interface.

---

**Autor:** [Seu Nome Aqui]
