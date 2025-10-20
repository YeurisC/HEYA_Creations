const links = [
    //Array para guardar los links y los titulos
    {text:'Inicio', url:'index.njk'}, 
    {text:'Registrarse', url:'registrarse.njk'}
]
//Aqui se añade la informacion directamente al HTML
const navcont = document.getElementById("navbarul")
//Aqui que crea el navbar
navcont.innerHTML = links.map(item => `<li><a href="${item.url}">${item.text}</a></li>`).join(""); 
