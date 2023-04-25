
const button = document.querySelector("#myBtn")

const insertarTitulo = () => {
    const titulo = document.createElement("h1")
    titulo.innerText = "Vamos a por el Titulo"
    document.body.appendChild(titulo)
}

button.addEventListener("click", () => {
    insertarTitulo()
})

const input = document.querySelector("#myInput")

input.addEventListener("input", (ev) => {
    const h2 =document.querySelector("#resultado")
    console.log(ev);
    h2.innerText = ev.target.value
})










