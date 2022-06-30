const chalk = require('chalk')
const validator=require("validator")

//Inverse is going inverse the color and background of the letters
console.log(chalk.bold.italic.underline.inverse("helloworld"));
console.log(chalk.bold.inverse("hello"));
const res=validator.isEmail("saicharang99@gmail.om")
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));