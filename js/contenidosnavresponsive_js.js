$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    
    
    /*Para mostrar y ocultar los submenús*/
    $(".submenu").click(function(){
        $(this).children(".children").slideToggle(); //Muestra u oculta el menú
    });

    $("ul").click(function(p){
        p.stopPropagation();
    });
}
