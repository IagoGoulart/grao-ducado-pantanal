import styled from "styled-components";

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
  height: 180px;
  object-fit: cover;
  background-color: #e8e0d0;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #04300a;
  margin-bottom: 8px;
  font-family: 'EB Garamond', serif;
`;

export const CardDate = styled.span`
  font-size: 12px;
  color: #a58a50;
  display: block;
  margin-bottom: 12px;
  font-family: 'EB Garamond', serif;
`;

export const CardExcerpt = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 16px;
  font-family: 'EB Garamond', serif;
`;

export const CardButton = styled.button`
  background: transparent;
  border: 1px solid #a58a50;
  padding: 8px 20px;
  border-radius: 6px;
  color: #a58a50;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #a58a50;
    color: #fff;
  }
`;