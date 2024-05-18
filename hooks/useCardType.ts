import { getCreditCardType } from "@/utils/helper";
import { useEffect, useState } from "react";

const useCardType = (cardNumber: string) => {
  const [cardType, setCardType] = useState<
    null | "visa" | "mastercard" | "jcb"
  >(null);
  useEffect(() => {
    setCardType(getCreditCardType(cardNumber.replace(/[^0-9]/g, "")));
  }, [cardNumber]);
  return cardType;
};
export default useCardType;
