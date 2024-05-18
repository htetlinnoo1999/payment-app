export const formatCardNumber = (
  cardNumber: string,
  willMask: boolean = true,
  spaces: string = "$1    "
) => {
  if (!cardNumber || cardNumber.length < 4) {
    return cardNumber; // return as is if the number is invalid
  }
  let maskedNumber;
  if (willMask) {
    // Replace all digits except the last 4 with the mask character
    maskedNumber =
      cardNumber.slice(0, -4).replace(/\d/g, "•") + cardNumber.slice(-4);
  } else {
    maskedNumber = cardNumber;
  }
  // Add spaces after every 4 characters
  return maskedNumber.replace(/(.{4})/g, spaces).trim();
};

export function getCreditCardType(cc: string) {
  let visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");

  let mastercard = new RegExp("^5[1-5][0-9]{14}$");
  let mastercard2 = new RegExp("^2[2-7][0-9]{14}$");
  let jcb = new RegExp("^35[0-9]{14}[0-9]*$");

  if (visa.test(cc)) {
    return "visa";
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return "mastercard";
  }
  if (jcb.test(cc)) {
    return "jcb";
  }
  return null;
}
