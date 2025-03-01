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