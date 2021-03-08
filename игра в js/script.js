let hel_pr = 500;
let swo_pr = 800;
let arm_pr = 1000;


let hel_qty = 5;
let swo_qty = 1;
let arm_qty = 10;

let points = 2000; 

const amunition =`
    ----You may buy the following:-------
    1. Helmet - ${hel_pr}
    2. Sword  - ${swo_pr}
    3. Armor  - ${arm_pr}
    x Exit
`;

let choise;
let total1;
let total2;
let total3;


while (choise != "x") {
  choise = prompt(amunition);
  switch (choise.toLowerCase()) {
    case "1" || "helmet":
      let qty1 = +prompt("How many?"); 
      total1 = hel_pr * qty1;
      if (total1 <= points && qty1 <= hel_qty) {
        alert(`Your order will cost ${total1}. ok`)
      };
      break;
    case "2" || "sword":
      let qty2 = +prompt("How many?");
      total2 = swo_pr * qty2;
      if (total2 <= points && qty2 <= hel_qty) {
        alert(`Your order will cost ${total2}. ok`)
      };
      break;
    case "3" || "armor":
      let qty3 = +prompt("How many?");
      total3 = arm_pr * qty3;
      if (total3 <= points && qty3 <= hel_qty) {
        alert(`Your order will cost ${total3}. ok`)
      };
      break;
  }
  
}


total = total1 + total2 + total3;
alert(total);