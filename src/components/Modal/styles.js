import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, #fff 0%, #f5ecda 100%);
  border-radius: 12px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #a58a50;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    width: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: #04300a;
  transition: all 0.3s ease;
  
  &:hover {
    color: #a58a50;
    transform: scale(1.1);
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: #04300a;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  letter-spacing: 1px;
  
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #a58a50;
    margin: 10px auto 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #04300a;
    font-family: 'EB Garamond', serif;
  }

  input, textarea {
    padding: 10px 12px;
    border: 1px solid #a58a50;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'EB Garamond', serif;
    background-color: #fff;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #04300a;
      box-shadow: 0 0 0 2px rgba(165, 138, 80, 0.2);
    }

    &::placeholder {
      color: #ccc;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #a58a50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'EB Garamond', serif;
  margin-top: 10px;

  &:hover {
    background-color: #8b7340;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SuccessMessage = styled.div`
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
`;

export const ErrorMessage = styled.div`
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
`;