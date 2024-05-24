# Pokedex Ionic

Este projeto é uma Pokedex construída utilizando Ionic e Angular. A aplicação permite visualizar uma lista de Pokémons e detalhes individuais sobre cada um deles. Este README fornece uma visão geral do projeto, incluindo como configurá-lo, as funcionalidades implementadas e detalhes específicos sobre a adição de um rodapé fixo.

## Visão Geral

A Pokedex Ionic é uma aplicação web responsiva que permite aos usuários pesquisar e visualizar detalhes sobre diferentes Pokémons. A aplicação consome uma API externa para obter os dados dos Pokémons e exibe esses dados de forma organizada e interativa.

## Funcionalidades

- **Lista de Pokémons**: Exibe uma lista de Pokémons com suas imagens e nomes.
- **Detalhes do Pokémon**: Ao clicar em um Pokémon na lista, exibe detalhes adicionais, como altura, peso e experiência base.
- **Pesquisa**: Permite pesquisar Pokémons pelo nome.
- **Rodapé Fixo**: Um rodapé fixo em todas as páginas com o símbolo de "original" e a mensagem "Desenvolvido por Bruno Cezario do Vale".

## Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter os seguintes componentes instalados no seu sistema:

- **Node.js (v14 ou superior)**: [Download Node.js](https://nodejs.org/)
- **NPM (v6 ou superior)**: Incluído com o Node.js
- **Ionic CLI**: Instale globalmente usando `npm install -g @ionic/cli`
- **Git**: [Download Git](https://git-scm.com/)

### Instalação

1. Clone o repositório:

git clone https://github.com/seu-usuario/pokedex-ionic.git
cd pokedex-ionic

2. Instale as dependências:

npm install

3. Execute a aplicação:

ionic serve

## Estrutura do Projeto

src/
  app/
    components/
    pages/
      pokemon-list/
      pokemon-detail/
    services/
    app.component.html
    app.component.scss
    app.module.ts
  assets/
    icon/
      original-icon.png
  global.scss
  index.html

## Adicionando o Rodapé Fixo
### Código HTML
Adicionei um rodapé fixo ao arquivo app.component.html para que ele apareça em todas as páginas da aplicação.

<ion-app>
  <ion-router-outlet></ion-router-outlet>
  <footer>
    <div class="footer-content">
      <img src="assets/icon/original-icon.png" alt="Original Symbol" class="footer-icon">
      <p>Desenvolvido por Bruno Cezario do Vale</p>
    </div>
  </footer>
</ion-app>

## Estilos CSS
### Os estilos para o rodapé foram adicionados ao arquivo global.scss para garantir que o rodapé tenha um design consistente em toda a aplicação.

footer {
  background-color: #f8f8f8;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

footer p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

## Adicionando o Ícone de "Original"
Certifique-se de que o ícone de "original" está salvo na pasta assets/icon do projeto.

src/
  assets/
    icon/
      original-icon.png
      
## Boas Práticas de Codificação
### Estrutura Modular: A aplicação é organizada em módulos, componentes e serviços para facilitar a manutenção e a escalabilidade.
### Código Limpo: Esforço constante para manter o código limpo, legível e bem documentado.
### Responsividade: Garantia de que a aplicação é totalmente responsiva e funciona bem em dispositivos móveis e desktops.
### Componentes Reutilizáveis: Criação de componentes reutilizáveis para evitar duplicação de código e facilitar futuras expansões.
### Interatividade: Melhorar a experiência do usuário com interações suaves, como efeitos de hover e transições.

## Conclusão
Este projeto demonstra uma aplicação completa de Pokedex construída com Ionic e Angular. Ele inclui funcionalidades principais de listagem e detalhamento de Pokémons, pesquisa, e um rodapé fixo com informações de crédito. Seguindo as melhores práticas de desenvolvimento, o projeto é organizado, responsivo e fácil de manter.

## Autor
Desenvolvido por Bruno Cezario do Vale