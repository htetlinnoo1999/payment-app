import { Card } from "@/interfaces/card";

export interface CardState {
  cards: Array<Card> | null;
  addCard: (card: CardWithToken) => void;
}

export interface CardWithToken extends Card {
  paymentToken?: string;
}
