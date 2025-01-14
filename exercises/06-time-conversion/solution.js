function timeConversion(s) {
  // Verificar si los dos primeros elementos son 12 y si los dos últimos son AM
  if (s.slice(-2) === "AM" && s.slice(0, 2) === "12") {
    return "00" + s.slice(2, -2);
  }
  
  // Remover el AM
  else if (s.slice(-2) === "AM") {
    return s.slice(0, -2);
  }
  
  // Verificar si es PM y si es 12
  else if (s.slice(-2) === "PM" && s.slice(0, 2) === "12") {
    return s.slice(0, -2);
  }
  
  else {
    return (parseInt(s.slice(0, 2), 10) + 12).toString() + s.slice(2, 8);
  }
}

// Pruebas
console.log(timeConversion("07:05:45PM"));  // 19:05:45