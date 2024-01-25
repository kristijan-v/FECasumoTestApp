import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from 'styled-components';
import Card from './Card';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: flex-left;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CardListContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const CardButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;

`;

const Heading = styled.h2`
  color: #3B058E;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Description = styled.p`
  color: #798291;
  font-size: 15px;
  margin-bottom: 16px;
`;

const CardButton = styled.button`
  background-color: #4C00C2;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  transition: background-color 0.3s;
`;

interface CardListProps {
  onEdit: (id: number) => void;
  onAddNewCard: () => void;
}

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
