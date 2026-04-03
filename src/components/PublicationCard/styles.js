import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #a58a50;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CardType = styled.span`
  font-size: 12px;
  color: #a58a50;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardNumber = styled.span`
  font-size: 12px;
  color: #04300a;
  background: #f5ecda;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #04300a;
  margin-bottom: 8px;
  font-family: 'EB Garamond', serif;
`;

export const CardDate = styled.div`
  font-size: 12px;
  color: #a58a50;
  margin-bottom: 12px;
`;

export const CardExcerpt = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const CardButton = styled(Link)`
  display: inline-block;
  color: #a58a50;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #8b7340;
    transform: translateX(5px);
  }
`;