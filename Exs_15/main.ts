let guestList = ["Faraz","Sadia","Hurain","Zunair"];

let dontCome = guestList[0];

console.log(dontCome,"nahi aa sakta");

guestList.splice(0, 1,"hamza");

guestList.forEach(guest => console.log(`salam ${guest},would u like to come dinner with mi?`));