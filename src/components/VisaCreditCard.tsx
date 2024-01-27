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
  CVCLabel,
  EXPLabel,
} from "./styles/VisaCard";
import "../GlobalStyle";

interface CardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  onEdit?: () => void;
}

const VisaCreditCard: React.FC<CardProps> = ({
  name,
  number,
  expiry,
  cvc,
  onEdit,
}) => {
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
      <EXPLabel>EXPIRES</EXPLabel>
        <Expiry>{expiry}</Expiry>
      </div>
      <div>
      <CVCLabel>CVC</CVCLabel>
        <CVC>{cvc}</CVC>
      </div>
      {onEdit && (
      <div>
        <EditButton onClick={onEdit}>
          <img src="/pics/edit-icon.svg" alt="Edit Icon" />
        </EditButton>
      </div>
      )}
    </CardWrapper>
  );
};

export default VisaCreditCard;
