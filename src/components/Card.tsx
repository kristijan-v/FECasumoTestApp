import React from 'react';
import {
  CardWrapper,
  BackgroundPattern,
  LogoWrapper,
  CardNumber,
  CardHolder,
  Expiry,
  CVC,
  EditButton,
} from './styles/Card';

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
