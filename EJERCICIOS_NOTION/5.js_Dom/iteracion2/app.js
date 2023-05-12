// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const nuevoDiv = document.createElement("div")
nuevoDiv.innerText = ""
document.body.appendChild(nuevoDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.


let newdiv = document.createElement("div")
let nuevaP = document.createElement("p")
nuevap.innerText = "metemos la p dentro del div"
newdiv.appendChild(nuevaP)
document.body.appendChild(newdiv)



const div2 = document.createElement("div")
const p = document.createElement("p")
p.innerText = "esto es una p dentro de un div"
div2.appendChild(p)
document.body.appendChild(div2)