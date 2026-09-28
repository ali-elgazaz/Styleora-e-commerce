const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * Formats a number as a localized USD price string (e.g. 89 -> "$89.00").
 *
 * @param {number} value
 * @returns {string}
 */
export function formatPrice(value) {
  return currencyFormatter.format(value ?? 0);
}
