let lista = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];
let novalista = [];
let filtrar = lista.filter((item, i) => {
  for (item in lista === i) {
    if (lista.indexOf(item) === i) {
      novalista.push(lista[item]);
    }
  }
  return lista.indexOf(item) === i;
});
console.log(filtrar);
console.log(novalista)