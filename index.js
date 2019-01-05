function produceDrivingRange(blockRange) {
  return function(marketMultiplier) {
    return marketMultiplier * blockRange;
  };
}