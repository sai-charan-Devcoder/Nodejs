//path module will provides utilities for help working with file and directory path

const path=require("path");

console.log(path.dirname('/Users/gampasaicharan/Desktop/react/react-app/pathModule/pathmod.js'));
console.log(path.extname('/Users/gampasaicharan/Desktop/react/react-app/pathModule/pathmod.js'));
console.log(path.basename('/Users/gampasaicharan/Desktop/react/react-app/pathModule/pathmod.js'));
console.log(path.parse('/Users/gampasaicharan/Desktop/react/react-app/pathModule/pathmod.js'))
const mypath=path.parse('/Users/gampasaicharan/Desktop/react/react-app/pathModule/pathmod.js');
console.log(mypath.root);