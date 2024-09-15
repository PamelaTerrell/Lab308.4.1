//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26



let headings = ["ID" , "Name" , "Occupation" , "Age"];

let bruce = ["42" , "Bruce" , "Knight" , "41"];

let bob = ["57" , "Bob" , "Fry Cook" , "19"];

let blaine = ["63" , "Blaine" , "Quiz Master" , "58"];

let bill = ["98" , "Bill" , "Doctor's Asistant" , "26"];


let parentArray = [headings, bruce, bob, blaine, bill];


console.log(parentArray); // Part 2 


let id = [bruce[0] , bob[0] , blaine[0] , bill[0]];

let names = [bruce[1] , bob[1] , blaine[1] , bill[1]];

let Occupation = [bruce[2] , bob[2] , blaine[2] , bill[2]];

let age = [bruce[3] , bob[3] , blaine[3] , bill[3]];

let arrayValue = [id , names, Occupation , age]

console.log(arrayValue);

let chart = [];

for (let i = 0; i < parentArray.length; i++){

    chart [i] = "id:" + id + "name:" + names + "occupation;" + Occupation + "age:" + age;
   
    console.log(chart); //Part 3


}

//apparently my father was right, I have no common sense