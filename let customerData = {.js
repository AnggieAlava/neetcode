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

function greetCustomers(firstName) {
  let greeting = "";
  if (!customerData.hasOwnProperty(firstName)) {
    greeting = "Welcome! Is this your first time?";
  } else {
    const { visits } = customerData[firstName];
    greeting =
      visits === 1
        ? `Welcome back! ${firstName}, we gladd you like us the first time`
        : `Welcom back! ${firstName}, we glad you visited us ${visits} times`;
  }
  return greeting;
}

let output = greetCustomers("Carrie");
console.log(output);
