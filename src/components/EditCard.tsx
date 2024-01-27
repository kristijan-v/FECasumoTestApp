import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCard } from '../redux/cardSlice';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  CloseButton,
  Overlay,
} from './styles/EditCard';
import "../custom-font1.css";

interface EditCardProps {
  card: { id: number; number: string; name: string; expiry: string; cvc: string };
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

  return (
    <Overlay>
    <Container>
      <Title>Edit Card</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Card Number:
          <Input
            type="text"
            name="number"
            value={editedCardData.number}
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <Label>
          Cardholder Name:
          <Input
            type="text"
            name="name"
            value={editedCardData.name}
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <Label>
          Expiry Date:
          <Input
            type="text"
            name="expiry"
            value={editedCardData.expiry}
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <Label>
          CVC:
          <Input
            type="text"
            name="cvc"
            value={editedCardData.cvc}
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <SubmitButton type="submit">Save Changes</SubmitButton>
        <CloseButton type="button" onClick={onClose}>
          Cancel
        </CloseButton>
      </Form>
      </Container>
  </Overlay>

  );
};

export default EditCard;
