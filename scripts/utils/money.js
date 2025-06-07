// utils = utility
export { formatCurrency }
function formatCurrency(priceCents) {
    return priceCents = (priceCents / 100).toFixed(2);
}