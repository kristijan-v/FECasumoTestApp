import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/cardSlice";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Error,
  SubmitButton,
  CloseButton,
  Overlay,
} from "./styles/AddNewCard";
import "../custom-font1.css";

interface CardFormProps {
  onClose: () => void;
  isOpen: boolean;
}

const CardForm: React.FC<CardFormProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const [success, setSuccess] = useState({
    name: false,
    number: false,
    expiry: false,
    cvc: false,
  });

  const formatCardNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.slice(0, 16).replace(/(\d{4})/g, "$1 ");
    return formattedValue.trim();
  };

  const formatExpiry = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    const formattedValue = numericValue
      .slice(0, 4)
      .replace(/(\d{2})(\d{0,2})/, "$1/$2");

    return formattedValue;
  };

  const formatCVC = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 3);

    return numericValue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpiry(value);
    } else if (name === "cvc") {
      formattedValue = formatCVC(value);
    }

    setCardData((prevData) => ({ ...prevData, [name]: formattedValue }));

    if (value.trim() !== "" && value.length !== e.target.maxLength) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    const isValid = true; // Add your validation logic
    setSuccess((prevSuccess) => ({ ...prevSuccess, [name]: isValid }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !cardData.number ||
      !cardData.name ||
      !cardData.expiry ||
      !cardData.cvc
    ) {
      setErrors({
        name: cardData.name ? "" : "Cardholder name is required",
        number: cardData.number ? "" : "Card number is required",
        expiry: cardData.expiry ? "" : "Expiry date is required",
        cvc: cardData.cvc ? "" : "CVC is required",
      });
      return;
    }

    // Regular expressions to validate the input formats
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const cvcPattern = /^\d{3}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/; // MM/YY format

    if (!cardNumberPattern.test(cardData.number)) {
      setErrors({ ...errors, number: "Invalid card number" });
      return;
    }

    if (!cvcPattern.test(cardData.cvc)) {
      setErrors({ ...errors, cvc: "Invalid CVC" });
      return;
    }

    if (!expiryPattern.test(cardData.expiry)) {
      setErrors({
        ...errors,
        expiry: "Invalid expiry date (MM/YY format required)",
      });
      return;
    }

    // Split the expiry date into month and year
    const [month, year] = cardData.expiry
      .split("/")
      .map((part) => parseInt(part, 10));

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last two digits of current year

    // Check if the expiry date is older than the current date
    if (
      year < currentYear ||
      (year === currentYear && month < currentDate.getMonth() + 1)
    ) {
      setErrors({
        ...errors,
        expiry: "Expiry date is older than the current date",
      });
      return;
    }

    // If all validations pass, you can proceed with submitting the form
    dispatch(addCard({ ...cardData, id: Date.now() }));
    setCardData({ name: "", number: "", expiry: "", cvc: "" });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <Overlay>
      <Container>
        <CloseButton type="button" onClick={onClose} className="cancel-button">
          X
        </CloseButton>
        <Title>Add your card details</Title>
        <Form onSubmit={handleSubmit}>
        <Label>
          Name in card
          <Input
            type="text"
            name="name"
            value={cardData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            success={success.name}
          />
          {errors.name && <Error>{errors.name}</Error>}
         
        </Label>
        <Label>
          Card number
          <Input
            type="text"
            name="number"
            value={cardData.number}
            onChange={handleInputChange}
            maxLength={19}
            placeholder="0000 0000 0000 0000"
            success={success.number}
          />
          {errors.number && <Error>{errors.number}</Error>}
          
        </Label>
        <Label>
          Expiry date
          <Input
            type="text"
            name="expiry"
            value={cardData.expiry}
            onChange={handleInputChange}
            maxLength={5}
            placeholder="00/00"
            success={success.expiry}
          />
          {errors.expiry && <Error>{errors.expiry}</Error>}
          
          
        </Label>
        <Label>
          CVC (Security code)
          <Input
            type="text"
            name="cvc"
            value={cardData.cvc}
            onChange={handleInputChange}
            maxLength={3}
            placeholder="000"
            success={success.cvc}
          />
          {errors.name && <Error>{errors.name}</Error>}
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Container>
    </Overlay>
)}
</>
);
};

export default CardForm;
