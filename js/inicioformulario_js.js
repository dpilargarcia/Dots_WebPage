/*
function limpiarFormulario() {
    document.getElementById("miForm").reset();
}
*/


(function() {
    
    var formulario = document.formulario_registro,
        elementos = formulario.elements;
    
    
    //Funciones
    var validarInputs = function() {
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type == "textarea") {
                if (elementos[i].value.length == 0) {
                    console.log('El campo ' + elementos[i].name + ' está vacío.');
                    elementos[i].className = elementos[i].className + " error";
                    return false;
                } else {
                    elementos[i].className = elementos[i].className.replace("error", "");
                }
            }
        }   
        return true;
    };
    var validarRadios = function() {
        var opciones = document.getElementsByName('sexo'),
            resultado = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
                for (var j = 0; j < opciones.length; j++) {
                    if (opciones[j].checked) {
                        resultado = true;
                        break;
                    }    
                }    
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('El campo sexo no se ha seleccionado');
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            } 
        }
    };
    var validarCheckbox = function() {
        var opciones = document.getElementsByName('terminos'),
            resultado = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "checkbox") {
                for (var j = 0; j < opciones.length; j++) {
                    if (opciones[j].checked) {
                        resultado = true;
                        break;
                    }    
                }    
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('No has aceptado los términos y condiciones');
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            } 
        }
    };
  
    
    var enviar = function(e){
        if (!validarInputs()){
            console.log('Faltó validar los inputs');
            e.preventDefault(); //Para que no se ejectue ninguna acción
        } else if (!validarCheckbox()) {
            console.log('Faltó validar los checkbox');
            e.preventDefault(); //Para que no se ejectue ninguna acción
        } else {
            console.log('¡Datos correctos!');
            //e.preventDefault(); 
        }
    };

        
    //Funciones Focus y Blur
    //Nota: el parentElement es la clase Input Group
    var focusInput = function(){
        this.parentElement.children[1].className = "label active"; //La clase label active pone el nombre del label gris y arriba
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", ""); //Reemplazar la clase error por ninguna clase (eliminar la clase error)
    };
    var blurInput = function(){
        //Comprobar si el elemento tiene algo de texto dentro o no
        //Si el elemento tiene texto adentro y damos click afuera, no se marca error, si es lo contrario, se marca error
        if (this.value <= 0) { //Si el usuario no ha escrito texto
             this.parentElement.children[1].className = "label"; //Se le quita la clase label active y se deja solo label
             this.parentElement.children[0].className = this.parentElement.children[0].className + " error"; //se concatena con la clase "error" 
        }
    };
    
        
    //Eventos
    formulario.addEventListener("submit", enviar);
        
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type == "textarea") {
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
    }
  }
}())