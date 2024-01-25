// cardsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: number;
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action: PayloadAction<{ id: number; card: Partial<Card> }>) => {
        const index = state.cards.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = { ...state.cards[index], ...action.payload.card };
        }
      },
    },
  });

export const { addCard, editCard } = cardsSlice.actions;

export default cardsSlice.reducer;
