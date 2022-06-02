let personas =[
    new Persona(1,"Juan","Perez",28),
];

let contadorPersonas;

function mostrarPersonas(){
    let tabla= "<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>";

    for(let persona of personas){
        tabla +=  `<tr><th>${persona._id}</th><th>${persona._nombre}</th><th>${persona._apellido}</th><th>${persona._edad}</th></tr>`;
    }
    console.log(tabla);

    document.getElementById("personas").innerHTML = tabla;
}

function agregarPersona(){
    let nombre=document.getElementById("nom");
    let apellido=document.getElementById("ape");
    let edad=document.getElementById("eda");

    if(nombre.value!="" && apellido.value!="" && edad.value!=""){
        p = new Persona(id.value,nombre.value,apellido.value,edad.value);
        personas.push(p);
        mostrarPersonas();
    }
    else{
        console.log("No hay nada que agregar");
    }
}
