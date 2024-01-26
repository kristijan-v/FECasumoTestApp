import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import {PageContainer,
  ContentContainer,
  CardListContainer,
  CardButtonContainer,
  Heading,
  Description,
  CardButton,
  Header,
} from './styles/CardList'
import Card from './CreditCard';


interface CardListProps {
  onEdit: (id: number) => void;
  onAddNewCard: () => void;
}

const mockCard = {
  id: -1,
  cvc: '009',
  name: 'John Cabruci',
  number: '5532 1234 5545 8014',
  expiry: '08/21',
};

const CardList: React.FC<CardListProps> = ({ onEdit, onAddNewCard }) => {
  const cards = useSelector((state: RootState) => state.cards.cards);

  return (
    <PageContainer>
      <Header>
        <Heading>Your Cards</Heading>
        <Description>Add, edit, or delete your cards anytime</Description>
      </Header>
      <ContentContainer>
        <CardListContainer>
        <Card
            key={mockCard.id}
            cvc={mockCard.cvc}
            name={mockCard.name}
            number={mockCard.number}
            expiry={mockCard.expiry}
          />
          {cards.map((card) => (
            <Card
              key={card.id}
              cvc={card.cvc}
              name={card.name}
              number={card.number}
              expiry={card.expiry}
            />
          ))}
        </CardListContainer>
        <CardButtonContainer>
          <CardButton onClick={onAddNewCard}>Add New Card</CardButton>
        </CardButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default CardList;
