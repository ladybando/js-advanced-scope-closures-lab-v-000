function produceDrivingRange(manufacturePrice) {
  return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
}