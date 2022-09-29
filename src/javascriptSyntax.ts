// nexGen JS -> ES6
const add = (a: number, b: number = 5) => a + b; //default has to be set from the right
add(5);

//SPREAD
const hobbies = ["sport", "cooking"];
const newHobbies = ["books", ...hobbies];
const anotherNewHobies = [];
anotherNewHobies.push(...newHobbies);
console.log(anotherNewHobies);

const person = {
  name: "Maz",
  age: 55,
};

const newPerson = { ...person };

//REST params

const add2 = (...numbers: number[]) => {
  return numbers.reduce((currentRestult, currentValue) => {
    return currentRestult + currentValue;
  }, 0);
};

//destructuring
const [hobby1, hobby2] = hobbies;
const [hobby3, ...remainingHobbies] = newHobbies;
