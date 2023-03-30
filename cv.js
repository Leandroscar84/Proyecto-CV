
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
        edad.innerHTML = `
        ${ data.results['0'].dob.age}
        `
        localizacion.innerHTML = `
        ${ data.results['0'].location.city}, ${ data.results['0'].location.state}, ${ data.results['0'].location.country}
        `
    })
} 

var elementos = document.getElementsByClassName("nombre");
for(var i = 0; i < elementos.length; i++)
    {
    elementos[i].addEventListener("mouseover", porencima);
    elementos[i].addEventListener("mouseout", alquitar);
    }
    function porencima() 
              {
              this.style.color = "#EDDFB3";
              }
    function alquitar() 
              {
              this.style.color = "#FF8000";
              }

function cambiarModo() 
    { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
    } 

const openModal = document.querySelector('.bt-extracto');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>
    {
    e.preventDefault();
    modal.classList.add('modal--show');
    });

closeModal.addEventListener('click', (e)=>
    {
    e.preventDefault();
    modal.classList.remove('modal--show');
    }); 