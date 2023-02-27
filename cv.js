
var foto = document.querySelector('#foto')
var Nombre = document.querySelector('#Nombre')
var celular = document.querySelector('#celular')
var email = document.querySelector('#email')
var genero = document.querySelector('#genero')
var nacimiento = document.querySelector('#nacimiento')
var edad = document.querySelector('#edad')
var localizacion = document.querySelector('#localizacion')
var nacionalidad = document.querySelector('#nacionalidad')

function traer() {

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
    
        //console.log(data.results['0'])
        
        foto.innerHTML = `
        <img class= "imagen" src="${data.results['0'].picture.large}" >
        `
        Nombre.innerHTML = `
        ${ data.results['0'].name.first} ${ data.results['0'].name.last}
        `
        celular.innerHTML = `
        ${ data.results['0'].phone}
        `
        email.innerHTML = `
        ${ data.results['0'].email}
        `   
        genero.innerHTML = `
        ${ data.results['0'].gender}
        `   
        nacimiento.innerHTML = `
        ${ data.results['0'].dob.date}
        `
     
        localizacion.innerHTML = `
        ${ data.results['0'].location.city}, ${ data.results['0'].location.state}, ${ data.results['0'].location.country}
        `
        /*nacionalidad.innerHTML = `
        ${ data.results['0'].nat}
        `     
        edad.innerHTML = `
        ${ data.results['0'].dob.age}
        `      */
    })
} 


let cambio = document.getElementById("fondo");
function cambfondo() {
    cambio.style.background = '#5e4d14' ;
    }

