function sumar() {
    // Obtener los valores de los inputs y convertirlos a número
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    // Realizar la suma
    var resultado = n1 + n2 + n3;
    // Mostrar el resultado
    document.getElementById("total").value = resultado;
}

function obtener_texto1(){
    var a=document.getElementById("sumar").value;
    alert (a);
}

function obtener_texto2(){
    var a=document.getElementById("h2").textContent;
    alert (a);
}

function agregar(){//sustituye lo que hay dentro del div1
    document.getElementById("div1").innerHTML = "Hola <input type='text'>";
}

function aumentar(){//aumentar a lo que hay
    document.getElementById("div1").append("<br> asdf ");
}

function eliminar(){//Eliminar todo el div
    document.getElementById("div1").remove();
}

function vaciar(){ //Vaciar el div
    document.getElementById("div1").innerHTML = "";
}

function aumentar_con_html(){//permite aumentar utilizando innerHTML.
    document.getElementById("div1").innerHTML += "Hola <input type='text'>";
}

document.getElementById("cambiar_fondo").addEventListener("click", function(){
    document.getElementById("midiv").style.backgroundColor = "green";
});

document.getElementById("cambiar_color").addEventListener("click", function(){
    document.getElementById("midiv").style.color = "white";
});

document.getElementById("borde").addEventListener("click", function(){
    document.getElementById("midiv").style.border = "3px solid black";
});

document.getElementById("negrita").addEventListener("click", function(){
    document.getElementById("midiv").style.fontWeight = "bold";
});

document.getElementById("clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.add("miestilo");
});

//El boton con id "x" agregará el estilo "z" al elemento "y"
document.getElementById("quitar_clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.remove("miestilo");
});