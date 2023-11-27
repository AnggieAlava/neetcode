let inventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function getLace(inventory) {
  const aux = [];

  inventory.forEach((element) => {
    element.shoes.forEach((item) => {
      const splited = item.name.split(" ");

      splited.forEach((word, index) => {
        if (word.startsWith("lace")) aux.push({ name: splited, index: index });
      });
    });
  });
  return aux;
}

console.log(getLace(inventory));
