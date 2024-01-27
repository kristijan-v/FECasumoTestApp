import React, { useEffect, useRef, useState } from 'react';
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
  CardListAndButtonContainer,
  LogoWrapper,
} from './styles/CardList'
import Card from './CreditCard';
import VisaCreditCard from './VisaCreditCard';
import EditCard from './EditCard';
import { ReactComponent as LogoIcon } from "../assets/casumo-logo.svg";


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

const mockCardVisa = {
  id: -2,
  cvc: '129',
  name: 'John Cabruci',
  number: '0923 1231 8892 2381',
  expiry: '12/24',
};

const CardList: React.FC<CardListProps> = ({ onEdit, onAddNewCard }) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentEditingCard, setCurrentEditingCard] = useState<number | null>(null);

  const [isMockCard, setIsMockCard] = useState<boolean>(false);
  
  

  const handleEdit = (cardId: number) => {
    setCurrentEditingCard(cardId);
    setIsEditing(true);
    setIsMockCard(cardId === mockCard.id || cardId === mockCardVisa.id);
  };



  const headerRef = useRef<HTMLDivElement>(null);
  const [topPadding, setTopPadding] = useState<number>(0);
  const cards = useSelector((state: RootState) => state.cards.cards);
  let editingCard;
  if (isMockCard) {
    
    editingCard = currentEditingCard === mockCard.id ? mockCard : mockCardVisa;
  } else {
    
    editingCard = currentEditingCard !== null ? cards.find(card => card.id === currentEditingCard) : undefined;
  }

  
  useEffect(() => {
    if (headerRef.current) {
      setTopPadding(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <PageContainer>
      <Header ref={headerRef}>
        <LogoWrapper><LogoIcon/></LogoWrapper>
        <Heading>Your Cards</Heading>
        <Description>Add, edit, or delete your cards anytime</Description>
      </Header>
      <ContentContainer style={{ paddingTop: `${topPadding + 20}px` }}>
      <CardListAndButtonContainer>
        <CardListContainer>
        <Card
            key={mockCard.id}
            cvc={mockCard.cvc}
            name={mockCard.name}
            number={mockCard.number}
            expiry={mockCard.expiry}
            onEdit={() => handleEdit(mockCard.id)}
          />
        <VisaCreditCard
            key={mockCardVisa.id}
            cvc={mockCardVisa.cvc}
            name={mockCardVisa.name}
            number={mockCardVisa.number}
            expiry={mockCardVisa.expiry}
            onEdit={() => handleEdit(mockCardVisa.id)}
          />
          {cards.map((card) => (
            <Card
              key={card.id}
              cvc={card.cvc}
              name={card.name}
              number={card.number}
              expiry={card.expiry}
              onEdit={() => handleEdit(card.id)}
            />
          ))}
        </CardListContainer>
        <CardButtonContainer>
          <CardButton onClick={onAddNewCard}>Add New Card</CardButton>
        </CardButtonContainer>
      </CardListAndButtonContainer>
      </ContentContainer>
      {isEditing && editingCard && (
  <EditCard card={editingCard} isMockCard={isMockCard} onClose={() => setIsEditing(false)} />
)}

    </PageContainer>
  );
};

export default CardList;

