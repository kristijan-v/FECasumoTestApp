import React from "react";
import {
  CardWrapper,
  BackgroundPattern,
  LogoWrapper,
  CardNumber,
  CardHolder,
  Expiry,
  CVC,
  EditButton,
} from "./styles/VisaCard";
import "../custom-font1.css";

interface CardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

const VisaCreditCard: React.FC<CardProps> = ({ name, number, expiry, cvc }) => {
  return (
    <CardWrapper>
      <BackgroundPattern />
      <LogoWrapper>
        <img src="/pics/visa-logo.svg" alt="Visa Logo" />
      </LogoWrapper>
      <div>
        <CardNumber>{number}</CardNumber>
      </div>
      <div>
        <CardHolder>{name}</CardHolder>
      </div>
      <div>
      
        <Expiry>{expiry}</Expiry>
      </div>
      <div>
      
        <CVC>{cvc}</CVC>
      </div>
      <div>
        <EditButton>
          <img src="/pics/edit-icon.svg" alt="Edit Icon" />
        </EditButton>
      </div>
    </CardWrapper>
  );
};

export default VisaCreditCard;
