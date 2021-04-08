const fs = require('fs')

// const readstream = fs.createReadStream('./temp.txt')

// readstream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

//Another method
const readstream = fs.createReadStream('./temp.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./temp3.txt')


// readstream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// })
readstream.pipe(writeStream);
//Now WriteStream