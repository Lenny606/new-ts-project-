let number: number[];

number = [5];

//TupLE
const person: {
  role: [number, string];
} = { role: [2, "test"] };

person.role[1] = "xx";

//enum

enum Role {
  READ_ONLY = "Read Only",
  TOM = "Tom",
}

export const person2 = {
  name: Role.TOM,
  role: Role.READ_ONLY,
};

console.log(person2.role);
console.log(person2.name);

//Union
function combine(input1: number | string, input2: number | string) {
  if (input1 === "number" && input2 === " number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

//literals

let pi: "3.14";
let text: "jeden" | "druhy";

//alias
type Combinable = number | string | any;
const input3: Combinable = "text";
