const xyz = require('./modules')

console.log('hello');
xyz.people(30);
xyz.age(200);

const os = require('os');
console.log(os.platform(), os.homedir());