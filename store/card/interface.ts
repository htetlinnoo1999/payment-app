import { Card } from "@/interfaces/card";

export interface CardState {
  cards: Array<Card> | null;
  addCard: (card: Card) => void;
}
