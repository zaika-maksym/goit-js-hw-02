console.log('---Задание-№2');

const calculateEngravingPrice = function(message, pricePerWord) {
    const array = message.split(' ');
    const EngravingPrice = array.length * pricePerWord;
    return EngravingPrice;
};


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
