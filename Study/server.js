

const fs=require('node:fs')
const path = require('path')


fs.readFile(path.join(__dirname,'Files','start.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
fs.writeFile(path.join(__dirname,'Files','write.txt'),'hi pattu', (err) => {
  if (err) throw err;
  console.log('writing is complete');
});
process.on('uncaughtException', err=>{
  console.error(`some error: ${err}`);
  process.exit(1);
})