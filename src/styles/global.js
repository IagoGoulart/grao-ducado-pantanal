import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset global */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'EB Garamond', serif;
    overflow-x: hidden;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'EB Garamond', serif;
  }

  p, span, a, li, button, input, textarea {
    font-family: 'EB Garamond', serif;
  }

  /* Animações suaves */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Aplicar animação nas seções */
  section, .section {
    animation: fadeInUp 0.6s ease-out;
  }

  /* Scroll suave */
  html {
    scroll-behavior: smooth;
  }

  /* Estilo da scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f5ecda;
  }

  ::-webkit-scrollbar-thumb {
    background: #a58a50;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8b7340;
  }

  /* Seleção de texto */
  ::selection {
    background-color: #a58a50;
    color: #fff;
  }

  /* Links padrão */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Botões padrão */
  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Container padrão para conteúdo */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;