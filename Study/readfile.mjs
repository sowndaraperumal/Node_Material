import { isUtf8 } from 'node:buffer';
import { readFile } from 'node:fs';

readFile('./File/stardt.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
process.on('uncaughtException', err=>{
  console.error(`some error: ${err}`);
  process.exit(1);
})