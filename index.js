let container = document.getElementById("container")

let planes = [{
    image:'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800',
    title:'Plan basico',
    description: 'El plan mas basico de todos, tiene lo necesario pero los otros son los mejores',
},
{
    image:'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800',
    title:'Plan Oro',
    description: 'Mejor que el basico, pero peor que el platinum',
},
{
    image:'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800',
    title:'Plan Platinum',
    description: 'El mejor de todos, en Hd y con cashback',
},
];

for(let i = 0; i < planes.length; i++) {
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${planes[i].image} class="card-img-top" alt="imagen">
    <div class="card-body">
        <h5 class="card-title">${planes[i].title}</h5>
        <p class="card-text">${planes[i].description}</p>
        <a href="#" class="btn btn-primary">Seleccionar</a>
    </div>
    </div>
    `
}

let calcular = () => {
    let monto = document.getElementById("monto").value
    let total = document.getElementById("total")

    let dolarHoy = 262
    let impuestoPais = +monto * (30/100)
    let iva = +monto * (35/100)
    let incrementoFijo = +monto + 10

    monto = dolarHoy * +monto + impuestoPais + iva + incrementoFijo

    total.innerHTML = `
        <div>
        <h1>Tienes que pagar ${monto} pesos argentinos</h1>
        </div>
    `
}