const b = null;
console.log(typeof b);

const c = 5;
console.log(typeof c);

const valueB = 'random string';
console.log(Number(valueB)); 
console.log(typeof Number(valueB));

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

/* const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log('Logging clients: ', clients[i]);
} */

const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}
const string = 'javascript';

for (const character of string) {
  console.log(character);
}

const string1 = 'javascript' + 'evolytion';

for (const character of string1) {
  console.log(character);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total);

const fn = () => {
  console.log('Hello! :]');
};

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

for (const key in hotel) {
  console.log('Value: ', hotel[key]);
}

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// Вертикальная запись удобнее для чтения
const updatedHouses = [
  ...houses.slice(0, 1),
  'Frey of the Crossing',
  ...houses.slice(2),
];

console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']


const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and 

const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3

function sayHello() {
  var say = function() { console.log(hello); }
  // Local variable that ends up within the closure 
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure(); // ‘Hello, world!’
