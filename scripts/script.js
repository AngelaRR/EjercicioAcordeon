//Funciones arrow para la optimización de JS

function handlerEvent(){

    let div = document.querySelectorAll('.acordeonContent');
    let button = document.querySelectorAll('.acordeonContainer__button');


    button.forEach( (boton, i) => {
        button[i].addEventListener('click', () => {
            div.forEach( ( indice, i) => {
                div[i].classList.remove('active');
            });

            div[i].classList.add('active');
        });
    });
}


window.onload = handlerEvent;