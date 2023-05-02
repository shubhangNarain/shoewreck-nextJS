export const getDiscountPrice = (price, original_price) => {
    return (((original_price - price) / original_price) * 100).toFixed(2);
}