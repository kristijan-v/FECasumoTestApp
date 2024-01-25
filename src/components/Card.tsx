import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #3B058E;
  border-radius: 24px;
  padding: 20px;
  width: 320px;
  position: relative;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 16px;
`;

const BackgroundPattern = styled.div`
  border-radius: 24px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url('/pics/card-background-shape.svg');
  background-size: cover;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  img {
    width: 100px;
    height: 32px;
  }
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  img {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

const CardNumber = styled.div`
  letter-spacing: 2px;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-start; /* Adjusted alignment */
`;

const CardHolder = styled.div`
  font-size: 0.9em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-start; /* Adjusted alignment */
`;

const Expiry = styled.div`
  font-size: 0.8em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-end;
`;

const CVC = styled.div`
  font-size: 0.8em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-end;
`;

interface CardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

const CreditCard: React.FC<CardProps> = ({ name, number, expiry, cvc }) => {
  return (
    <CardWrapper>
      <BackgroundPattern />
      <LogoWrapper>
        <img src="/pics/mastercard-logo.svg" alt="Master Card Logo" />
      </LogoWrapper>
      <div>
        <CardNumber>{number}</CardNumber>
        <CardHolder>{name}</CardHolder>
      </div>
      <div>
        <Expiry>{expiry}</Expiry>
        <CVC>{cvc}</CVC>
      </div>
      <EditButton>
        <img src="/pics/edit-icon.svg" alt="Edit Icon" />
      </EditButton>
    </CardWrapper>
  );
};

export default CreditCard;
