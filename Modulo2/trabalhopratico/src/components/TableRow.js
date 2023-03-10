import React from "react";

const TableRow = ({ item, id, reportAllData }) => {
  /*   const fundoMultimercado = reportAllData.slice(0, 12);
  const fundoAcoes = reportAllData.slice(12, 24);
  const fundoTecnologia = reportAllData.slice(24, 36);
  const fundoProtecoes = reportAllData.slice(36, 48);
  const fundoTematico = reportAllData.slice(48, 60);
  const fundoRendaFixa = reportAllData.slice(60, 72);
  const fundoCriptomoedas = reportAllData.slice(72, 84);
  //console.log(fundoAcoes);

  const porcentageCalc = (array) => {
    for (let i = 0, a = 1; a < array.length; i++, a++) {
      const result = (array[a].value * 100) / array[i].value;
      console.log(result);
    }
  };

  porcentageCalc(fundoAcoes);

  const acaoPercArray = [100, 11, 9, 4, 6, -11, 10, 6, 7, 3, 8, -2];
  const criptoPercArray = [100, 4, 6, 3, 8, 3, 1, 3, -4, -10, 4, 8];
  const protecaoPercArray = [100, -9, -7, 6, 6, 4, -10, 7, 9, 9, -8, -8];
  const rendaFixaPercArray = [100, -4, 1, 9, -5, -11, -9, 7, 7, 3, -10, 2];
  const tecnoPercArray = [100, -7, 1, -2, 4, 9, 7, -10, -2, -3, 5, -4];
  const multiMercPercArray = [100, 4, 11, -7, 4, 2, -10, -9, 3, -3, -4, -8];
  const tematicoPercArray = [100, 5, -7, 10, 11, 11, 10, 6, -8, -4, 8, -9]; */

  return (
    <tr>
      {item.investmentId === id && (
        <>
          {/* <td>{item.investmentId}</td> */}
          <td>{`${item.month}/${item.year}`}</td>
          <td>{item.value.toFixed(2)}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
