import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  
`;

export const Hero = styled.section`
  width: 100%;
  min-height: 360px; /* altura mínima para o conteúdo */
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 50px;
  padding-top: 50px;
  color: #04300a;
`;
export const HeroContent = styled.div`
  z-index: 3; /* conteúdo sempre na frente */
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  
 

`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: 'EB Garamond', serif;
  
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  border: solid 2px #a58a50;
  font-size: 19px;
  background-color: rgba(248, 242, 232);
  border-radius: 7px;
  font-family: 'EB Garamond', serif;

  &:hover{
   background-color: #f5ecda;

  }
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 350px;
  display: block;
  z-index: 1;
  object-fit: cover;
  top: 0;
  left: 0;
`;

/* NOVO: camada de degradê sobre a imagem */
export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px; /* mesma altura da imagem */
  z-index: 2;    /* acima da imagem, abaixo do conteúdo */
  pointer-events: none; /* não atrapalha cliques nos botões */

  background: linear-gradient(
    135deg,                     /* diagonal de cima-esquerda para baixo-direita */
    rgba(248, 242, 232, 1) 0%,  /* branco no canto superior esquerdo */
    rgba(248, 242, 232, 1) 20%, 
    rgba(248, 242, 232, 0.4) 40%,
    rgba(248, 242, 232, 0) 70%   /* transparente no canto inferior direito */
  );
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center; 
  text-align: left;
  margin: 20px auto 0 auto;
  gap: 15px; 
  color: #04300a; 
  font-size: 22px;  
  max-width: 900px;
  padding: 0 20px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;          /* distância da linha */
    left: 50%;              /* vai pro meio */
    transform: translateX(-50%); /* puxa metade pra trás */

    width: 950px;           /* tamanho da linha */
    height: 3px;
    background-color: #a58a50;
    border-radius: 2px;
  }
`;
// Brasão acima do texto
export const Brasao = styled.img`
  width: 350px;      
  height: auto;
`;

//---------------------------------------


export const Section = styled.section`
  margin-top: 80px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 300;
  color: #04300a;
  font-family: 'EB Garamond', serif;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #a58a50;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 320px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #e8e0d0; /* fallback enquanto não tem imagem */
`;

export const CardContent = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #04300a;
    margin-bottom: 8px;
    font-family: 'EB Garamond', serif;
  }

  span {
    font-size: 0.85rem;
    color: #a58a50;
    display: block;
    margin-bottom: 16px;
    font-family: 'EB Garamond', serif;
  }

  button {
    background: transparent;
    border: 1px solid #a58a50;
    padding: 8px 20px;
    border-radius: 6px;
    color: #a58a50;
    font-size: 0.9rem;
    font-family: 'EB Garamond', serif;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #a58a50;
      color: #fff;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const PageButton = styled.button`
  padding: 10px 18px;
  border: 1px solid #a58a50;
  background: transparent;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: #04300a;

  &:hover {
    background: #a58a50;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  padding: 10px 16px;
  border: 1px solid #a58a50;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  background: ${(props) => (props.active ? "#a58a50" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#04300a")};

  &:hover {
    background: #a58a50;
    color: #fff;
  }
`;