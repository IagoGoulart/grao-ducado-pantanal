import styled from "styled-components";

// Container geral da página ou componente
export const Container = styled.div`
font-family: 'EB Garamond', serif;

  /* Atualmente vazio, mas pode ser usado para centralizar conteúdo ou aplicar margens/paddings globais */
`;

// Cabeçalho da página
export const Header = styled.header`
  display: flex;
  flex-direction: column; /* Organiza os elementos verticalmente */
  align-items: center;    /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  padding: 2px;           /* Espaçamento interno mínimo */
 

  /* Gradiente de fundo do header */
  background: linear-gradient(180deg, #1f3d2b, #163024);
  color: #e6d3a3; /* Cor padrão do texto dentro do header */
`;

// Área que contém o logo e título
export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Corrige o Link do React Router */
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 140px; 
    height: auto; /* Mantém a proporção original da imagem */
    display: block; /* Remove espaço extra abaixo da imagem */
  }

  h1 {
    font-size: 42px; 
    font-weight: 300;
    text-align: center;
    margin-top: -30px; /* Ajusta a posição do título sobre a imagem */
    letter-spacing: 2px; /* Espaçamento entre letras para efeito estético */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.82);
    margin-bottom: 5px;
  }
`;

// Subtítulo "Micronação"
export const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 3px;
  color: #c5a96b;
  text-transform: uppercase;
  margin-top: -5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 10px;
    letter-spacing: 2px;
  }
`;

// Navegação principal
export const Nav = styled.nav`
  width: 100%;
  margin-top: 25px;
  padding: 15px 0;

  /* Bordas superior e inferior para separar visualmente o menu */
  border-top: 2px solid #c5a96b;
  border-bottom: 2px solid rgb(197, 169, 107);

  ul {
    display: flex;        /* Organiza os itens horizontalmente */
    gap: 40px;            /* Espaço entre cada item do menu */
    list-style: none;     /* Remove bullets */
    justify-content: center; /* Centraliza os itens na nav */
  }

  li {
    position: relative;   /* Necessário para posicionar submenus */
    cursor: pointer;      /* Mostra que é clicável */
    font-size: 19px;
    letter-spacing: 1px;
    transition: 0.3s;     /* Animação suave para hover */
  }

  /* Links do menu */
  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  li:hover {
    color: #c5a96b;       /* Efeito de hover nos itens principais */
  }

  /* Submenu oculto por padrão (primeiro nível) */
  li ul {
    position: absolute;   /* Posiciona em relação ao li pai */
    top: 35px;            /* Afasta do item principal */
    left: 0;
    z-index: 30;

    display: none;        /* Esconde até o hover */
    flex-direction: column;
    gap: 10px;

    background: #1f3527;
    padding: 12px 15px;
    min-width: 200px;

    border: 1px solid #c5a96b;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  /* Mostra o submenu ao passar o mouse no item pai */
  li:hover > ul {
    display: flex;
  }

  /* Estilo dos itens do submenu */
  li ul li {
    font-size: 16px;
    white-space: nowrap;
    padding: 8px 10px;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  /* Adiciona linha de separação entre itens do submenu, exceto o último */
  li ul li:not(:last-child) {
    border-bottom: 1px solid rgba(197, 169, 107, 0.3);
  }

  /* EFEITO HOVER NOS ITENS DO SUBMENU */
  li ul li:hover {
    color: #c5a96b;
    background: rgba(197, 169, 107, 0.15);
    padding-left: 15px;
    transform: translateX(3px);
  }

  /* Ponte invisível para o submenu não sumir */
  li::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 25px;
    background: transparent;
  }

  /* ========== SUBMENU DE PUBLICAÇÕES (terceiro nível) ========== */
  .has-submenu {
    position: relative;
  }

  .has-submenu > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  /* Submenu de publicações - oculto por padrão */
  .has-submenu .submenu {
    position: absolute;
    left: 100%;
    top: 0;
    z-index: 31;
    display: none;
    flex-direction: column;
    gap: 10px;
    background: #1f3527;
    padding: 12px 15px;
    min-width: 200px;
    border: 1px solid #c5a96b;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  /* Mostra o submenu de publicações ao passar o mouse */
  .has-submenu:hover .submenu {
    display: flex;
  }

  /* Estilo dos itens do submenu de publicações */
  .has-submenu .submenu li {
    white-space: nowrap;
    transition: all 0.3s ease;
  }

  .has-submenu .submenu li:hover {
    color: #c5a96b;
    background: rgba(197, 169, 107, 0.15);
    padding-left: 15px;
    transform: translateX(3px);
  }

  /* Ponte invisível para o submenu de publicações */
  .has-submenu::after {
    content: '';
    position: absolute;
    top: 0;
    right: -25px;
    width: 25px;
    height: 100%;
    background: transparent;
  }

  @media (max-width: 768px) {
    .has-submenu .submenu {
      position: static;
      left: 0;
      margin-left: 20px;
    }
  }
`;