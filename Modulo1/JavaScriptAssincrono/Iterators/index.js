const carModel = {
  allmodel: {
    Fiat: ["Palio", "Cronos", "Toro"],
    Volksvagem: ["Gol", "Up", "Nivus", "Tiguan"],
    Chevrolet: ["Onix", "Tracker", "Corsa"],
  },
  [Symbol.iterator]() {
    const brands = Object.values(this.allmodel);

    let currentModelIndex = 0;
    let currentBrandIndex = 0;

    return {
      next() {
        const models = brands[currentBrandIndex];

        // verifica se já navegou em todos os modelos da marca
        if (!(currentModelIndex < models.length)) {
          currentBrandIndex++;
          currentModelIndex = 0;
        }

        // verifica se já navegou em todas as marcas
        if (!(currentBrandIndex < brands.length)) {
          return {
            value: undefined,
            done: true,
          };
        }

        return {
          value: brands[currentBrandIndex][currentModelIndex++],
          done: false,
        };
      },
    };
  },
};

for (const car of carModel) {
  console.log(car);
}
