
//module wrapper
// (function(exports,require,module,_filename,_dirname){const name="sai"
// console.log(name)});
//the above representation will not work
(function(){
    const a="sai";
    console.log(a);
}
)();
console.log(__dirname);
console.log(__filename)
//a is not accesible because its IIFE
// console.log(a);