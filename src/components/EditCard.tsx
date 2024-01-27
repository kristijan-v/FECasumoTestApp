import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, editCard } from "../redux/cardSlice";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  CloseButton,
  Overlay,
  DeleteButton,
  CardPreviewWrapper,
} from "./styles/EditCard";
import "../GlobalStyle.ts";
import CreditCard from "./CreditCard";
import { ReactComponent as CloseIcon } from "../assets/close-btn.svg";

interface EditCardProps {
  card: {
    id: number;
    number: string;
    name: string;
    expiry: string;
    cvc: string;
  };
  onClose: () => void;
  isMockCard: boolean;
}

const EditCard: React.FC<EditCardProps> = ({ card, isMockCard, onClose }) => {
  const dispatch = useDispatch();

  const [editedCardData, setEditedCardData] = useState({
    number: card.number,
    name: card.name,
    expiry: card.expiry,
    cvc: card.cvc,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMockCard) {
      dispatch(editCard({ id: card.id, card: editedCardData }));
    }
    onClose();
  };

  const CardPreview = () => {
    return (
      <CardPreviewWrapper>
        <CreditCard
          number={editedCardData.number}
          name={editedCardData.name}
          expiry={editedCardData.expiry}
          cvc={editedCardData.cvc}
        />
      </CardPreviewWrapper>
    );
  };

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <Title>Edit your card</Title>

        <CardPreview />

        <Form onSubmit={handleSubmit}>
          <Label>
            Cardholder Name
            <Input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={editedCardData.name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Card Number
            <Input
              type="text"
              name="number"
              placeholder="Card Number"
              value={editedCardData.number}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Expiry Date
            <Input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={editedCardData.expiry}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            CVC
            <Input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={editedCardData.cvc}
              onChange={handleInputChange}
            />
          </Label>
          <SubmitButton type="submit">Confirm</SubmitButton>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteCard(card.id))}
          >
            Delete card
          </DeleteButton>
        </Form>
      </Container>
    </Overlay>
  );
};

export default EditCard;
