//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

string = ["ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"];

for (let i = 0; i < string.length; i++ ){
    console.log(string[i])
}

let row0 = ["ID,Name,Occupation,Age"];
let row1 = ["42,Bruce,Knight,41"];
let row2 = ["7,Bob,Fry Cook,19"];
let row3 = ["63,Blaine,Quiz Master,58"];
let row4 = ["98,Bill,Doctor’s Assistant,26"];

parentArray = [row0 , row1 , row2, row3, row4];

console.log(parentArray);


for (let i in string){ 
    
    
    console.log(string[i])
}



string.unshift('48,Barry,runner,25');

console.log(string);




string.push('7,Bilbo,none,111');

console.log(string);

