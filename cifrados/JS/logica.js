var cesar = cesar || (function(){
    //tenemos que entender que para poder cifrar o descifrar
    //es necesario obtener 3 parametros
    //txt, desp, action
    var doStaff = function(txt, desp, action){
        //nota ya estamos mal, la nueva version de JS
        //ya no maneja var, ahora todo es let y const
        //besos y comercial wiiiii
        var replace = (function(){
            //necesito un alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z'];

        var l = abc.length;
        //tenemos que crear una funcion que se encargue de poder realizar
        //el cambio de las posiciones de las letras para el
        //cifrado
        return function(c){
            var i = abc.indexOf(c.toLowerCase());
            //reemplazo de las posiciones o el movimiento
            //primero tenemos que saber si el texto esta vacio
            if(i != -1){
                //movimiento de las posiciones
                var pos = i;
                if(action){
                    //cifrar
                    pos += desp;
                    pos -= (pos>=27)?27:0;
                }else{
                    //descifrando
                    pos -= desp;
                    pos += (pos<0)?27:0;
                }
                return abc[pos];
            }
            return c;
        };

    })();

    //vamos a necesitar regresar el reemplazo de la cadena
    //pero primero hay que verificarlo
    var re = (/[a-zñ]/ig);
    return String(txt).replace(re, function(macth){
        //se encarga de buscar las coincidencias entre la
        //expresion regular y el textarea
        return replace(macth);
    });
    
    };

    //necesito enviar si vamos a cifrar o descifrar
    return {
        //el caso para cuando cifras
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();


//crear las funciones codificar y decodificar

function codificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.encode(document.getElementById("cadena").value, parseInt(document.getElementById("semilla").value)%27);
}

function decodificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, parseInt(document.getElementById("semilla").value)%27);
}

function validar_cifrado(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("semilla").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").innerHTML = "Favor de llenar todos los campos";
	}else{
		codificar();
	}
	
}
function validar_descifrado(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("semilla").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").innerHTML = "Favor de llenar todos los campos";
	}else{
		decodificar();
	}
	
}
function validar_cadena(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[a-zA-ZñÑ\s]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}
function validar_semilla(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}