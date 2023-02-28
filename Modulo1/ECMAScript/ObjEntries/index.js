const tipoLogradouros = {
  AER: "Aeroporto",
  AL: "Alameda",
  AV: "Avenida",
};

console.log(Object.entries(tipoLogradouros));

console.log(Object.values(tipoLogradouros));

console.log(Object.getOwnPropertyDescriptor(tipoLogradouros, "AER"));
