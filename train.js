console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling" ,// 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydaysi yoq endi" // 60
];

// CALLBACK function
function maslahatBering(a, callback) {
  if(typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(() => {
      callback(null, list[5]);
    }, 1000);
  }
}

// maslahatBering(10, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering(25, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering(55, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering("salom!", (err, data) => {
//   if(err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");
// maslahatBering(65, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 2");

console.log("passed here 1");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 2");


// ASYNC function
// async function maslahatBering(a) {
//   if(typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return(list[0]);
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     })
//   }
// }
// call via then/catch
// console.log("passed here 1");
// maslahatBering(25)
// .then((data) => {
//   console.log("javob:", data);
// })
// .catch((err) => {
//   console.log("ERROR:", err);
// });
// console.log("passed here 2");

// call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// A-TASK:
// function countLetter(letter, word) {
//   let count = 0; 
//   for(let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count ++;
//     }
//   }
//   return count;
// }

// const result = countLetter("e", "engineer");
// console.log("result:", result);

// B-TASK
// function countDigits(str) {
//   let count = 0;
//   for (let  i of str) {
//       if (i >= '0' && i <= '9')
//        count++;
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9")); // 7

//  C-TASK
// function checkContent(a, b) {
//   x = a.toLowerCase().split('').sort().join('');
//   y = b.toLowerCase().split('').sort().join('');
//   return x === y;
// }

// console.log(checkContent("MitGroup", "mixgroup")) // false
// console.log(checkContent("Navruz", "Navruz")) // true


class Shop {
  constructor(non, lagmon, cola) {
    this.products = { non, lagmon, cola };
  }

  logTime() {
    return new Date().toLocaleTimeString('uz-UZ');
  }

  qoldiq() {
    console.log(`Hozir ${this.logTime()}da ${this.products.non}ta non, 
    ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`);
  }

  sotish(mahsulot, soni) {
    if (this.products[mahsulot] >= soni) {
      this.products[mahsulot] -= soni;
      console.log(`Hozir ${this.logTime()}da ${soni}ta ${mahsulot} sotildi!`);
    } else {
      console.log(`Hozir ${this.logTime()}da yetarli ${mahsulot} yo'q!`);
    }
  }

  qabul(mahsulot, soni) {
    this.products[mahsulot] += soni;
    console.log(`Hozir ${this.logTime()}da ${soni}ta ${mahsulot} qabul qilindi!`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq();