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
  IconWrapper,
} from "./styles/CardForm";
import "../custom-font1.css";
import { ReactComponent as SuccessIcon } from "../assets/form-success.svg";
import { ReactComponent as ErrorIcon } from "../assets/form-error.svg";

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

    let errorMessage = "";
    let isValid = false;

    if (formattedValue === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      setSuccess((prevSuccess) => ({ ...prevSuccess, [name]: false }));
      return;
  }

    switch (name) {
      case "name":
        isValid = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(value.trim());
        errorMessage = isValid ? "" : "Please fill in your name";
        break;
      case "number":
        isValid = /^\d{4} \d{4} \d{4} \d{4}$/.test(formattedValue);
        errorMessage = isValid ? "" : "Please enter a valid credit card number";
        break;
      case "expiry":
        isValid = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/.test(formattedValue);
        errorMessage = isValid ? "" : "Please enter a valid expiry date";
        break;
      case "cvc":
        isValid = /^\d{3}$/.test(formattedValue);
        errorMessage = isValid ? "" : "Please enter a valid security code";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
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

    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const cvcPattern = /^\d{3}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/;

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

    const [month, year] = cardData.expiry
      .split("/")
      .map((part) => parseInt(part, 10));

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;

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

    dispatch(addCard({ ...cardData, id: Date.now() }));
    setCardData({ name: "", number: "", expiry: "", cvc: "" });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <Overlay>
          <Container>
            <CloseButton
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
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
                  error={errors.name}
                />
                <IconWrapper>
                  {success.name && <SuccessIcon />}
                  {errors.name && <ErrorIcon />}
                </IconWrapper>
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
                  error={errors.number}
                />
                <IconWrapper>
                  {success.number && <SuccessIcon />}
                  {errors.number && <ErrorIcon />}
                </IconWrapper>
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
                  error={errors.expiry}
                />
                <IconWrapper>
                  {success.expiry && <SuccessIcon />}
                  {errors.expiry && <ErrorIcon />}
                </IconWrapper>
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
                  error={errors.cvc}
                />
                <IconWrapper>
                  {success.cvc && <SuccessIcon />}
                  {errors.cvc && <ErrorIcon />}
                </IconWrapper>
                {errors.cvc && <Error>{errors.cvc}</Error>}
              </Label>
              <SubmitButton
              >
                Confirm
              </SubmitButton>
            </Form>
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default CardForm;
