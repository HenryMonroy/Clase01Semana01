console.log('Hola')

console.log(2+6)

let date = new Date()

console.log('Hoy es ' + date)
console.log(`Hoy es tambien ${date}`)

document.body.style.backgroundColor = '#212121'
document.body.style.color = '#ffffff'

let p = document.createElement("p")
let t = document.createTextNode("Hola, Bienvenidos")
p.appendChild(t)
document.body.appendChild(p)

let h1 = document.createElement("h1")
let heading = document.createTextNode(`Hoy es ${date}`)
h1.appendChild(heading)
document.body.appendChild(h1)