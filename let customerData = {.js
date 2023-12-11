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
  let greeting = "";
  if (!customerData.hasOwnProperty(firstName)) {
    greeting = "Welcome! is this your first time?";
  } else {
    const { visits } = customerData[firstName];
    greeting =
      visits === 1
        ? `Welcome back, ${firstName}`
        : `So glad to see you again ${firstName}`;
  }
  return greeting;
}

let output = greetCustomer("Joe");
console.log(output);
