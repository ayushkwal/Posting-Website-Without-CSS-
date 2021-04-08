const people = (num) => {
    console.log(`We know that right now there are ${num} people here`);
}
people(10);


const age = (num) => {
    console.log(`we know right now there are people of age more that ${num}`)
}
module.exports = {
    people,
    age
}