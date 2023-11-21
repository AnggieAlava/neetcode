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

//el objetivo es comparar los objetos enfocados en su propiedad shoes, y encontrar si alguna de las palabras del name de shoes contiene
//"lace" dentro de ellas

function mapInObj(obj) {
  let aux = [];
  obj.forEach((property) => {
    property.shoes.forEach((shoeName) => {
      const nameSplited = shoeName.name.split(" ");

      nameSplited.forEach((word, index) => {
        if (word.startsWith("lace"))
          aux.push({ nameWords: nameSplited, targetWordIndex: index });
      });
    });
  });
  return aux;
}
console.log(mapInObj(inventory));
