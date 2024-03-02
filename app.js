// let studentNamesLiteral = [];

// let studentNamesObject = new Array();

// let stringsArray = ["apple", "banana", "cherry"];

// let numbersArray = [1, 2, 3, 4, 5];

// let booleanArray = [true, false, true];

// let mixedArray = ["John", 25, true, "apple", false];

// let educationQualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];

// document.write("<p>Educational Qualifications in Pakistan:</p>");
// document.write("<ul>");

// for (let i = 0; i < educationQualifications.length; i++) {
//   document.write("<li>" + educationQualifications[i] + "</li>");
// }

// document.write("</ul>");

// // 1. Declare arrays for student names and scores.
// let studentNames = ["Alice", "Bob", "Charlie"];
// let studentScores = [420, 380, 450];

// // 2. Calculate percentage for each student.
// const totalMarks = 500;
// let percentages = [];

// for (let i = 0; i < studentScores.length; i++) {
//   percentages[i] = (studentScores[i] / totalMarks) * 100;
// }

// for (let i = 0; i < studentNames.length; i++) {
//   console.log(
//     `${studentNames[i]}'s score: ${studentScores[i]}, Percentage: ${percentages[i]}%`
//   );
// }

// document.write("<p>Student Scores and Percentages:</p>");
// document.write("<ul>");

// for (let i = 0; i < studentNames.length; i++) {
//   document.write(
//     `<li>${studentNames[i]}'s score: ${studentScores[i]}, Percentage: ${percentages[i]}%</li>`
//   );
// }

// document.write("</ul>");

// let colorArray = ["Red", "Green", "Blue"];

// document.write("<p>Color Array: " + colorArray.join(", ") + "</p>");

// let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(colorToAddBeginning);

// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colorArray.push(colorToAddEnd);

// colorArray.unshift("Yellow", "Orange");

// colorArray.shift();

// colorArray.pop();

// let indexToAdd = prompt("Enter the index to add a color:");
// let colorToAdd = prompt("Enter the color to add:");
// colorArray.splice(indexToAdd, 0, colorToAdd);

// let indexToDelete = prompt("Enter the index to delete color(s):");
// let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colorArray.splice(indexToDelete, numberOfColorsToDelete);

// document.write("<p>Updated Color Array: " + colorArray.join(", ") + "</p>");

// let studentScores = [85, 72, 93, 64, 78];

// studentScores.sort(function (a, b) {
//   return a - b;
// });

// console.log("Sorted Student Scores (Ascending Order):", studentScores);

// document.write(
//   "<p>Sorted Student Scores (Ascending Order): " +
//     studentScores.join(", ") +
//     "</p>"
// );

// let emptyArray = [];

// let arrayWithString = ["Hello"];

// let alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// let alphabetWithLength = ["h", "i", "j", "k", "l", "m", "n", "o"];
// let arrayLength = alphabetWithLength.length;
// alert("Total length of the array: " + arrayLength);

// let arrayOneElement = ["First Element"];
// arrayOneElement[1] = "Second Element";
// alert(arrayOneElement[1]);

// let arrayOneElement = ["Hello"];
// arrayOneElement.push("World");
// alert(arrayOneElement[arrayOneElement.length - 1]);

// let Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();

// Alphabet.push(42);
// console.log(Alphabet);


// let sizes1 = ["S", "M", "XL", "XXL", "XXXL"];
// sizes1.shift();
// console.log(sizes1);

// let sizes2 = ["S", "M", "XL", "XXL", "XXXL"];
// sizes2.unshift(1, 2, 3);
// console.log(sizes2);

// let arrayOneElement = ["First Element"];
// arrayOneElement.unshift("New First Element");
// alert(arrayOneElement[0]);

// let sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
// sizes4.splice(2, 0, "L");
// console.log(sizes4);

// let sizes5 = ["S", "M", "XL", "XXL", "XXXL"];
// let regSizes = sizes5.slice(0, 3);
// console.log(regSizes);

// let pets6 = ["dog", "cat", "ox", "duck", "frog"];
// pets6.splice(1, 3, "elephant", "monkey");
// console.log(pets6);

// let pets7 = ["dog", "cat", "ox", "duck", "frog"];
// pets7.splice(1, 2);
// console.log(pets7);

// let pets8 = ["dog", "cat", "ox", "duck", "frog", "flea"];
// let slicedPets = pets8.slice(3, 5);
// console.log(slicedPets);
