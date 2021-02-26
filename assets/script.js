let proyectos_portafolio = document.getElementById("proyectos_portafolio");

const proyectos = [
    {
        id: "1",
        nombre: "Proyecto 1",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/cabin.png",
        link: "https://www.google.com/"
    },
    {
        id: "2",
        nombre: "Proyecto 2",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/cake.png",
        link: "https://www.google.com/"
    },
    {
        id: "3",
        nombre: "Proyecto 3",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/game.png",
        link: "https://www.google.com/"
    },
    {
        id: "4",
        nombre: "Proyecto 4",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/circus.png",
        link: "https://www.google.com/"
    },
    {
        id: "5",
        nombre: "Proyecto 5",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/safe.png",
        link: "https://www.google.com/"
    },
    {
        id: "6",
        nombre: "Proyecto 6",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto officiis fuga eum magni? Enim dignissimos aut perferendis? Sint hic provident eius placeat, odit odio maxime ad alias eaque nostrum.",
        imagen: "assets/img/portfolio/submarine.png",
        link: "https://www.google.com/"
    }
]

for (let proyecto of proyectos) {
    proyectos_portafolio.innerHTML += "<div class='portafolio-proyecto col-xs-12 col-sm-6 col-md-4' type='button' id='"+ proyecto.id +"' data-bs-toggle='modal' data-bs-target='#portafolio_modal'>"+
    "<div class='portafolio-item'>"+
    "<div class='portafolio-item-content d-flex align-items-center justify-content-center h-100 w-100'><i class='fas fa-plus fa-3x'></i></div>"+
    "<img class='img-portafolio' src='"+ proyecto.imagen +"'>"+
    "</div>"+
    "</div>";
}

let proyectos_div = document.getElementsByClassName("portafolio-proyecto");
for (let proyecto of proyectos_div){
    proyecto.onclick = function(){
        let index = this.id - 1;
        myModalEl= document.getElementById("portafolio_modal");
        myModalEl.addEventListener('shown.bs.modal', function (event) {
            document.getElementById("portafolio_modal_titulo").innerHTML=proyectos[index].nombre;
            document.getElementById("portafolio_modal_imagen").src = proyectos[index].imagen;
            document.getElementById("portafolio_modal_descripcion").innerHTML = proyectos[index].descripcion;
            document.getElementById("portafolio_modal_link").href = proyectos[index].link;
            
        })
    }
}