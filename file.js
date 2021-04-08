//read file write file create file and delete files
const fs = require('fs')

fs.readFile('./temp.txt', (err, data) => {
    if (err) {
        console.log('some error occuredd')
    } else {
        console.log(data.toString());
    }
})

//writing file
fs.writeFile('./text1', 'helllo we changed the text', () => {
    console.log('file changed')
})


//creating directories
if (!fs.existsSync('./assets'))
    fs.mkdir('./assets', (err) => {
        if (err)
            console.log(err)
        else
            console.log('created');
    })

// setTimeout() => ({
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('deleted')
//         }
//     })
// }, 3000)


//deleting file
fs.unlink('./text1', (err) => {
    if (err) {
        console.log(err);
    }
})