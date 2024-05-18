import { create } from "zustand";
import { CardState } from "./interface";
import { Card } from "@/interfaces/card";

const CardStore = create<CardState>((set) => ({
  cards: null,
  addCard: (card: Card) =>
    set((state) => {
      if (state.cards === null) {
        // If the cards array is null, initialize it with the new card
        return { cards: [card] };
      } else {
        // If the cards array already exists, add the new card to it
        return { cards: [...state.cards, card] };
      }
    }),
}));

export default CardStore;
