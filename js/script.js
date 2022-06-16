
$(document).ready (function() {
    let slideAtual = 1;
    let listaSlides = ["banner_f1", "banner_cs", "banner_lol"]
    setInterval (mudarSlide, 2500)

    function mudarSlide() {
        console.log ("Slide atual: ", slideAtual);
        
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual -1]) 
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass (listaSlides[ (listaSlides.length) -1 ])
        }
        
        $("#carrossel").addClass (listaSlides[slideAtual]);

        slideAtual++

        if (slideAtual > (listaSlides.length-1) ) {
            slideAtual = 0;
        }
    }
}) 

function mostrarMenu() {
    let menu = document.getElementById ("menu")
    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function cadastrarNewsLetter() {
    let email = document.getElementById ("campo-email") .value;
    console.log ("email")
}
