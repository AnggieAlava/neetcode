let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  //inicializar el salulo personalizado como una cadena de caracteres vacia
  let greeting = "";
  //verifico si en mi objeto el nombre del cliente no existe, significa que es su primera vez visitandonos
  if (!customerData.hasOwnProperty(firstName)) {
    //actualizo el saludo para los clientes que nos visitan por primera vez
    greeting = "Welcome! Is this your first time?";
  } else {
    // desestructuro el objeto para obtener por medido del nombre del cliente la cacntidad
    //de veces que ha visitado el restaurante, es decir estoy extrayendo la propiedadd visits del objeto
    //customerData[firstName]
    const { visits } = customerData[firstName];
    //actualizo el saludo dependiendo si es un cliente frecuente o si nos visita por segunda vez
    greeting =
      visits === 1
        ? `Welcome back, ${firstName}! We're glad you liked us the first time!`
        : `Welcome back, ${firstName}! So glad to see you again!`;
  }
  return greeting;
}
let output = greetCustomer("Nancy");
console.log(output);
