function edad(){
    var anioNacido=2000;
    var anioActucal=2020;
    var Resultado= anioActucal-anioNacido;
    if(Resultado>=18){
        console.log("Eres Mayor de edad"+Resultado+"Años");
    }else{
        console.log("Eres Menor de edad"+Resultado+"Años"); 
    }
}


var palabras=new Array();

var palabra=new Object();
palabra.fruta="platano";


var palabra2=new Object();
palabra2.fruta="naranja";

var palabra3=new Object();
palabra3.fruta="uva";

palabras.push(palabra);
palabras.push(palabra2);
palabras.push(palabra3);

function recorre(){
   console.log(palabras[0].fruta);
}

function recorre(){
    
    for(var i=0;i<palabras.length;i++){
        console.log(palabras[i].fruta);
    }
}
function creartabla(){
    var element="";
    for(var i=0;i<palabras.length;i++){
        
        element='<tr><td>'+i+'</td><td>'+palabras[i].fruta+'</td></tr>';
        
        document.getElementById("tbody1").insertRow(-1).innerHTML = element;

    }
}


function culpable(){
var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("irás a la cárcel");
	}else if(culpable=="no"){
		document.write("irás a casa");
	}else{
		document.write("la documentación por favor");
    }
}

function dulce(){
var dulces = window.prompt("qué dulce quieres");
		var precio = 0.00;
		var helado = 1.90;
		var precioFinal = 0.00;

		if(dulces=="galleta"){
			precio = 1;
		}else if(dulces == "bizcochos"){
			precio = 1.50;
		}else if(dulces == "brownie"){
			precio = 0.75;
		}else  if(dulces == "tarta"){
			precio = 0.95;
		}else{
			document.write("no tenemos este dulce, lo sentimos. ");
			precio = 0;
		}

		precioFinal = helado + precio;
        document.write("el helado cuesta " + precioFinal + "soles");
    }