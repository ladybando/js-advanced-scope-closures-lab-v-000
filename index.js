function produceDrivingRange(n){
  return function(x, y) {
    let range =  Number(y.slice(0,-2)) - Number(x.slice(0,-2));
    if (range <= n){
      return `within range by ${n - range}`;
    } else {
      return `${range - n} blocks out of range`;
    }
  };
}

function produceTipCalculator(n){
  return function(price){
    return n * price;
  };
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }

  };

}