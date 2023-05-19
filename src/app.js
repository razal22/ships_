/*
Nagy-Berta Lázár
I-2/N
2023.15.19.
*/
function dataRead(){
    fetch("C:/Users/diak/Desktop/ships/shipsale")
    .then(response => response.json())
    .then((data) => {
        const adatok = data;
        generaltablazat(adatok);

    })
    .catch(error => {
        console.error("Hiba a beolvasásnál!", error);
    });


}

function generaltablazat(adatok) {
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    Object.keys(adatok[0]).forEach(key => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    adatok.forEach(adat => {
      const row = document.createElement("tr");
      Object.values(adat).forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
      });
      table.appendChild(row);
    });

    const container = document.getElementById("tablazat-container");
    container.appendChild(table);
  }
  