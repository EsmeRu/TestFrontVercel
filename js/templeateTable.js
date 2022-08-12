const templateTable = function ({ label, value, tipo, marca, codigo }) {
  return `
      <tr class="table__row-body">
        <td class="table__col">${label}</td>
        <td class="table__col">${value}</td>
        <td class="table__col">${codigo}</td>
        <td class="table__col">${marca}</td>
        <td class="table__col">${tipo}</td>
        <td class="table__col"><i class="fa-solid fa-trash-can table__col-button" onclick="trashButton('${codigo}')"></i></td>
      </tr>`;
};

const loadRow = (data) => {
  let childs = "";
  data.forEach((e) => {
    const rowData = {
      label: e.label,
      value: e.value.slice(e.value.search("-") + 1),
      codigo: e.codigo,
      marca: e.marca,
      tipo: e.tipo,
    };
    childs += templateTable(rowData);
  });
  return childs;
};
