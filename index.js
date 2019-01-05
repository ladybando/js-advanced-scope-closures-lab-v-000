function (manufacturePrice) {
  return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
}