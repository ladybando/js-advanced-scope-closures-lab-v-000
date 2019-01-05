function produceDrivingRange(blockRange) {
  return function(blockMultiplier) {
    return blockMultiplier * blockRange;
  };
}