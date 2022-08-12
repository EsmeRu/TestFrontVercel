let data = [];
const trashButton = (value) => {
  var updateData = data.filter((item) => item.codigo !== value);
  data = updateData;
  loadData(data);
};

function init() {
  fetch("https://my-json-server.typicode.com/dered-dev/hotelsapi/db")
    .then((response) => response.json())
    .then((json) => {
      data = json.hotels;
      loadData(data);
    })
    .catch((err) => console.log("Solicitud fallida", err));
}

const loadData = (data) => {
  document.getElementById("data").innerHTML = loadRow(data);
};

init();
