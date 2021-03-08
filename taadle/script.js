let name = "";
for (let tr = 0; tr < 10; tr++) {
  let table = document.querySelector("table");
  table.innerHTML += `<tr class="${name}"><td>some text</td></tr>`;
  if (tr % 2 == 0) {
    name = "even";
  } else {
    name = "";
  }
}


