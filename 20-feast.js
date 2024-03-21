// WPU Coding Challenge 2024
// 20/366
// https://www.codewars.com/kata/5aa736a455f906981800360d

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

const feast = (beast, dish) => beast.slice(0, 1);

console.log(feast("great blue heron", "garlic naan"));
