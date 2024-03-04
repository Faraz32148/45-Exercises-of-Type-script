var guestList = ["Faraz", "Sadia", "Hurain", "Zunair"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakta");
guestList.splice(0, 1, "hamza");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would u like to come dinner with mi?")); });
