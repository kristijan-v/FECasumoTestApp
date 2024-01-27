
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import EditCard from './components/EditCard';

const App: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [editingCard, setEditingCard] = useState<number | null>(null);
  const isEditingMockCard = editingCard === -1 || editingCard === -2;
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  const handleEdit = (id: number) => {
    setEditingCard(id);
  };

  const handleEditClose = () => {
    setEditingCard(null);
  };

  const handleAddNewCard = () => {
    setShowNewCardForm(true);
  };

  const handleNewCardFormClose = () => {
    setShowNewCardForm(false);
  };

  return (
    <div>
      <CardList onEdit={handleEdit} onAddNewCard={handleAddNewCard} />
      {showNewCardForm && <CardForm isOpen={showNewCardForm} onClose={handleNewCardFormClose} />}
      {editingCard !== null && <EditCard 
          card={cards.find(card => card.id === editingCard)!} 
          onClose={handleEditClose} 
          isMockCard={isEditingMockCard}
        />}
    </div>
  );
};

export default App;
