const fsProsime=require('fs').promises
const path = require('path')

const fileOps =async()=>{
  try {
  const data= await fsProsime.readFile(path.join(__dirname,'Files','start.txt'),'utf8')
  console.log(data);
  await fsProsime.writeFile(path.join(__dirname,'Files','write.txt'),"hi ammu");
  await fsProsime.appendFile(path.join(__dirname,'Files','write.txt'),"\n\n poda");
  await fsProsime.rename(path.join(__dirname,'Files','write.txt'),path.join(__dirname,'Files','rename.txt'));
  } catch (error) {
    console.error(error)
  }
}
fileOps()