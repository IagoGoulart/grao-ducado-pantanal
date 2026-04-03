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
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    height: 250px;
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
  font-size: 48px;
  color: #fff;
  font-family: 'EB Garamond', serif;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  background: #fff;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #a58a50;
  margin-bottom: 30px;
  font-family: 'EB Garamond', serif;
`;

export const Body = styled.div`
  font-size: 18px;
  color: #2c2c2c;
  line-height: 1.8;
  font-family: 'EB Garamond', serif;
  
  p {
    margin-bottom: 20px;
  }
  
  strong, b {
    font-weight: 600;
    color: #04300a;
  }
  
  em, i {
    font-style: italic;
  }
  
  ul, ol {
    margin: 20px 0;
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;

export const BackButton = styled.button`
  margin-top: 40px;
  padding: 10px 24px;
  background: transparent;
  border: 1px solid #a58a50;
  border-radius: 6px;
  color: #a58a50;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  transition: all 0.3s ease;
  
  &:hover {
    background: #a58a50;
    color: #fff;
  }
`;