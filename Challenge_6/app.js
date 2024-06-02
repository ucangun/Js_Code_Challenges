//Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

//Your tasks:

//Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK😀
/*
const calcAverageHumanAge = function (ages) {
  const calcHumanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(calcHumanAge);
  const adults = calcHumanAge.filter((a) => a >= 18);
  console.log(adults);
  const average = adults.reduce((a, b, i, arr) => a + b / arr.length, 0);
  console.log(average);
};
*/

// Chaning Methods
const calcAverageHumanAge = function (ages) {
  const calcHumanAge = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((a) => a >= 18)
    .reduce((a, b, i, arr) => a + b / arr.length, 0);
  console.log(calcHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
