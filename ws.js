


const fetcEquipos = async (x) => {
    try {
        const res = await fetch('http://192.168.0.204/restapi/v1/getEquiposEntregas')
        const data = await res.json();

        if (x == 60) {
            Limpiar(data.length)
        } else {
            LLenar(data);
        }


    } catch (error) {
        console.log(error)
    }

}

const LLenar = data => {
   // console.log("lleno");
    const flex = document.querySelector(".flex");
    const template = document.getElementById("template-card").content;

    const fragment = document.createDocumentFragment();


    data.forEach(Equipo => {


        template.getElementById("NombreEquipo").textContent = Equipo.Equipo;


        template.getElementById("PENDIENTES").textContent = Equipo.Pendientes;


        template.getElementById("ENTREGADOS").textContent = Equipo.Entregados;


        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

    });

    flex.appendChild(fragment);

}


function Limpiar(cant) {

    console.log("cant a limpiar: " + cant)

   for (var i = 0; i <= cant+cant; i++) {

    var templateLimpiar = document.querySelectorAll('[id=templateID]');
    try{
        templateLimpiar[i].remove() 
    }catch{
       // console.log("no existe template en la posicion: "+i)
    }
   
   }

   

}


var x = 0
setInterval(function () {
    console.log(x)
    if (x == 1) {

        fetcEquipos(x)

    } else if (x == 60) {

        fetcEquipos(x)
        x = 0;
        console.clear();
    }
    x = x + 1
}, 1000);

document.oncontextmenu = function(){return console.log("tampoco con ese")}
document.onmousedown = function(){return console.log("no hagas click")}
