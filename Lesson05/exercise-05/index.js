function formatPrice(value, currency) {
  value = Number(value);
  currency = currency || "$";
  if (Number.isNaN(value) || typeof currency != "string") {
    return null;
  }
  return currency + value.toFixed(2);
}
console.log( formatPrice(1.99, 32) ); // => null
console.log( formatPrice(5, "£") ); // => £5.00
console.log( formatPrice(9.9) ); // => $9.90
console.log( formatPrice("Ted") ); // => null
