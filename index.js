const information = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `ì'm a ${information.myName}, i'm in ${information.myCampus}`,
    e : "oX",
    T : "UU"
}));

