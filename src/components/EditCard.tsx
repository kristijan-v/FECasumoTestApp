import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCard } from '../redux/cardSlice';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Error,
  SubmitButton,
  CloseButton,
} from './styles/EditCard';

interface EditCardProps {
  card: { id: number; number: string; name: string; expiry: string; cvc: string };
  onClose: () => void;
}

const EditCard: React.FC<EditCardProps> = ({ card, onClose }) => {
  const dispatch = useDispatch();

  const [editedCardData, setEditedCardData] = useState({
    number: card.number,
    name: card.name,
    expiry: card.expiry,
    cvc: card.cvc,
  });

  const [errors, setErrors] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCardData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (!editedCardData.number || !editedCardData.name || !editedCardData.expiry || !editedCardData.cvc) {
      setErrors({
        number: 'Card number is required',
        name: 'Cardholder name is required',
        expiry: 'Expiry date is required',
        cvc: 'CVC is required',
      });
      return;
    }

    dispatch(editCard({ id: card.id, card: editedCardData }));
    onClose();
  };

  return (
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
          <Error>{errors.number}</Error>
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
          <Error>{errors.name}</Error>
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
          <Error>{errors.expiry}</Error>
        </Label>
        <br />
        <Label>
          CVC:
          <Input type="text" name="cvc" value={editedCardData.cvc} onChange={handleInputChange} />
          <Error>{errors.cvc}</Error>
        </Label>
        <br />
        <SubmitButton type="submit">Save Changes</SubmitButton>
        <CloseButton type="button" onClick={onClose}>
          Cancel
        </CloseButton>
      </Form>
    </Container>
  );
};

export default EditCard;
