import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  font-family: 'EB Garamond', serif;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 50px 80px;
  width: 100%;
  
  background: linear-gradient(180deg, #1f3d2b, #163024);
  color: #e6d3a3;
  border-top: 3px solid #c5a96b;
  
  @media (max-width: 1024px) {
    padding: 40px 50px;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    padding: 40px 30px;
  }
`;

export const BrasaoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  img {
    width: 120px;
    height: auto;
    display: block;
    margin-bottom: 15px;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.82);
    margin: 10px 0 5px;
  }

  p {
    font-size: 13px;
    color: #c5a96b;
    letter-spacing: 1px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    img {
      width: 100px;
    }
    
    h2 {
      font-size: 20px;
    }
  }
`;

export const LinksArea = styled.div`
  flex: 1;
  min-width: 150px;

  h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #c5a96b;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 35px;
      height: 2px;
      background-color: #c5a96b;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a, button {
    color: #e6d3a3;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: 'EB Garamond', serif;
    width: auto;
    display: inline-block;

    &:hover {
      color: #c5a96b;
      padding-left: 5px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    
    h3::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    a:hover, button:hover {
      padding-left: 0;
    }
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 120px;
  background-color: #c5a96b;
  opacity: 0.5;
  
  @media (max-width: 768px) {
    width: 80%;
    height: 2px;
  }
`;

export const SocialArea = styled.div`
  flex: 1;
  min-width: 140px;

  h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #c5a96b;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 35px;
      height: 2px;
      background-color: #c5a96b;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    
    h3::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #e6d3a3;
    font-size: 28px;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: #c5a96b;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CitizenButton = styled.button`
  padding: 14px 32px;
  cursor: pointer;
  border: solid 2px #a58a50;
  font-size: 18px;
  font-weight: 500;
  background-color: rgba(248, 242, 232);
  border-radius: 7px;
  font-family: 'EB Garamond', serif;
  color: #04300a;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  white-space: nowrap;

  &:hover {
    background-color: #a58a50;
    color: #fff;
    border-color: #a58a50;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 16px;
    white-space: nowrap;
  }
`;

export const LegalNotice = styled.div`
  text-align: center;
  padding: 25px 80px 15px;
  background: rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(197, 169, 107, 0.2);
  
  p {
    color: #740505;
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 1.5;
    margin: 0 0 10px 0;
    font-family: 'EB Garamond', serif;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 20px 30px 12px;
    
    p {
      font-size: 9px;
      line-height: 1.4;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 15px 20px 20px;
  background: rgba(0, 0, 0, 0.2);
  
  p {
    color: #052913;
    font-size: 14px;
    letter-spacing: 0.5px;
    margin: 0;
    font-family: 'EB Garamond', serif;
  }

  @media (max-width: 768px) {
    padding: 12px 20px 15px;
    
    p {
      font-size: 10px;
    }
  }
`;