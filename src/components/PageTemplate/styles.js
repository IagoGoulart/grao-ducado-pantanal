import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
`;

export const HeroBanner = styled.div`
  background-image: ${props => props.image 
    ? `url(${props.image})` 
    : 'linear-gradient(135deg, #1f3d2b, #163024)'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    height: 250px;
    background-attachment: scroll;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
`;

export const Title = styled.h1`
  font-size: 56px;
  color: #fff;
  font-family: 'EB Garamond', serif;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  z-index: 1;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 20px;
  
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background-color: #c5a96b;
    margin: 20px auto 0;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    
    &::after {
      width: 50px;
      margin: 15px auto 0;
    }
  }
`;

export const SymbolsSection = styled.div`
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff 0%, #f5ecda 100%);
  border-radius: 16px;
  text-align: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin: -20px 20px 0;
    padding: 30px 15px;
  }
`;

export const SymbolsTitle = styled.h2`
  font-size: 28px;
  color: #04300a;
  font-family: 'EB Garamond', serif;
  font-weight: 400;
  margin-bottom: 30px;
  
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #a58a50;
    margin: 10px auto 0;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SymbolsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const SymbolCard = styled.div`
  flex: 1;
  min-width: 180px;
  max-width: 220px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const SymbolImage = styled.img`
  width: 100%;
  max-width: 130px;
  height: auto;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background: #fff;
  padding: 10px;
  
  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }
`;

export const SymbolLabel = styled.p`
  font-size: 15px;
  color: #04300a;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  background: #fff;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Section = styled.div`
  margin-bottom: 60px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #04300a;
  font-family: 'EB Garamond', serif;
  font-weight: 400;
  margin-bottom: 25px;
  border-left: 4px solid #a58a50;
  padding-left: 20px;
  
  @media (max-width: 768px) {
    font-size: 26px;
    padding-left: 15px;
  }
`;

export const SectionText = styled.div`
  font-size: 18px;
  color: #2c2c2c;
  line-height: 1.8;
  margin-bottom: 25px;
  font-family: 'EB Garamond', serif;
  text-align: justify;
  
  p {
    margin-bottom: 15px;
  }
  
  strong, b {
    font-weight: 600;
    color: #04300a;
  }
  
  em, i {
    font-style: italic;
  }
  
  ul, ol {
    margin: 15px 0;
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  a {
    color: #a58a50;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const Subsection = styled.div`
  margin: 35px 0 25px 30px;
  padding-left: 20px;
  border-left: 2px solid rgba(165, 138, 80, 0.3);
  
  @media (max-width: 768px) {
    margin: 25px 0 20px 15px;
    padding-left: 15px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  color: #04300a;
  font-family: 'EB Garamond', serif;
  font-weight: 400;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: #4a4a4a;
  line-height: 1.7;
  margin-bottom: 15px;
  font-family: 'EB Garamond', serif;
  text-align: justify;
  
  p {
    margin-bottom: 12px;
  }
  
  strong, b {
    font-weight: 600;
    color: #04300a;
  }
  
  em, i {
    font-style: italic;
  }
  
  ul, ol {
    margin: 12px 0;
    padding-left: 25px;
  }
  
  li {
    margin-bottom: 6px;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.6;
  }
`;