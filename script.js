//Cambiando el estilo de la lista a cuadro:

var even = $(".even");
even.attr("style", "list-style: square;");

//Seleccion del 7mo "li" de la lista y dandole un alto de 10px:

var septimo = $("ul li").eq(6);
septimo.height(10);

//Convertir a mayúsculas a los li con clase "odd":

var mayuscula = $(".odd");
mayuscula.attr("style", "text-transform: uppercase;");

//Mover Murcial debajo de Madrid:

$("#murcia").insertAfter("#madrid");
