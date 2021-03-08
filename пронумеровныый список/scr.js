let names = ["Kate","Ivan","Maxim"]
let list = document.querySelector(".name-list")


// 1
// for (let i = 0; i < names.length; i++){
//   list.innerHTML += `<li>${names[i]}</li>`;
// }


// 2
// for (item of names) {
//   list.innerHTML += `<li>${names}</li>`;
// }

// 3
// names.forEach(function (eachName) {
//   list.innerHTML += `<li>${eachName}</li>`
// });

// 4
names.map((eachName) => {
  list.innerHTML += `<li>${eachName}</li>`
});