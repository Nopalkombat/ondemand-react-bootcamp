export function FormatPrice(price) {
  const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return '$' + formattedPrice;
}
