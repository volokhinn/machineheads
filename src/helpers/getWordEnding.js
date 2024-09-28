export default function getWordEnding(number, singular, pluralFew, pluralMany) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return pluralMany;
  }

  if (lastDigit === 1) {
    return singular;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return pluralFew;
  }

  return pluralMany;
}
