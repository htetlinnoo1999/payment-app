import { CardWithToken } from "@/store/card/interface";

export interface CardProps {
  cardInfo: CardWithToken;
}

export type Card = {
  cardNumber: string;
  cardHolder: string;
  expires: string;
  cvv: string;
};
