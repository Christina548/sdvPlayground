let country = 'New Zealand'
let city = 'Nelson'
let postcode = 7010
console.log (country)
console.log (city)
console.log (postcode)

let isIsland = false
let language
console.log (typeof isIsland)
console.log (typeof language)
language = 'English'
console.log (language)

language = {
    name: 'Chris',
    city: 'London',
    Country: 'United States'
}
console.log (typeof language)
console.log (language.city)
console.log (language.Country)


// language = ['english', 'deutsch', 'arabic']
// console.log (language[1])

const car = {
    model: 'toyota',
    year: '1984',
    colour: 'black'
}
console.log (car)

console.log (typeof postcode)
console.log (postcode)
postcode++
postcode--
console.log (postcode)

console.log (`${country}, ${city}, ${postcode}`)

postcode = 7010
postcode++
if (postcode === 7011) {
    console.log ('Nelson')
} else if (postcode === 7010) {
    console.log ('what???')
} else {
    console.log ('write city name')
}

let a = 'A+'
let b = 'B+'
let studentOne = 60
if (studentOne >= 70) {
    console.log (a)
} else if (studentOne <70) {
    console.log (b)
} 
console.log (24 >= 24) 
console.log (25 < 26)
console.log ('24' === 24)
console.log (24 !== 24)

console.log (0 == false)
console.log (1 == true)
console.log (2 == true)

const x = {
    city: 'Nelson'
}
const y = x
console.log (x === y)
console.log (y.city)


