 console.log('hey this is my first node app')
const names=require('./4-names');
console.log(names.name1);
console.log(names.name2);
const sayHi=require('./5-utils');
sayHi('susan');
sayHi(names.name1);
const way2=require('./6-alternative-flavor');
console.log(way2); 
require('./7-mind-grenade');
const path= require('path');
console.log(path.sep);
console.log("edited2");
