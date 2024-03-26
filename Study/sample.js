//console.log("hello")
//console.log(global)

const os= require('os');
const path = require('path');

//console.log(os.type())
//console.log(os.version())
//console.log(os.homedir())
console.log(__dirname,__filename);
console.log("---------------------")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

const math=require("./math");
console.log(math.add(1,2))
console.log(math.sub(342,34))
console.log(math.mul(3,5))
console.log(math.div(4,3))