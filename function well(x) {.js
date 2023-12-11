function well(x) {
  let countGoods = 0;

  for (let idea of x) {
    if (idea === "good") {
      countGoods += 1;
    }
  }

  if (countGoods === 0) {
    return "Fail";
  } else if (countGoods <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

console.log(well(["bad", "bad", "bad", "good", "good", "good"]));
