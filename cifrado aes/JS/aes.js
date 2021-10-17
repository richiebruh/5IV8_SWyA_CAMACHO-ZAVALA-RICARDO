function textoo(datos){
    let texto = [];
    texto.push(datos);

    return new Blob(texto,{
        type: 'text/plain'
    });
};

function descargar(contenidoEnBlob, nombreArchivo){
    
    var reader = new FileReader();
    
    reader.onload = function (event){
      
      var save = document.createElement('a');
      save.href = event.target.result;
      save.target = '_blank';
      
      save.download = nombreArchivo;
      var clicEvent = new MouseEvent('click',{
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      
      save.dispatchEvent(clicEvent);
      
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    
    reader.readAsDataURL(contenidoEnBlob);
};

function cifrado(){
    var numerillo = document.getElementById("numerillo").value;
     
    if(numerillo=="128"){
        cifrar1()
    }
    if(numerillo=="192"){
        cifrar2()
    }
    if(numerillo=="256"){
        cifrar3()
    }
}

function cifrar1(){
    let texto = document.getElementById("texto").value;
    let clave = document.getElementById("clave").value;

        var cifrado = CryptoJS.AES.encrypt(texto, clave);
        document.getElementById("cifracion").innerHTML=cifrado;
        descargar(textoo(cifrado), 'Cifradode128.txt');
    
}

function cifrar2(){
    let texto = document.getElementById("texto").value;
    let clave = document.getElementById("clave").value;

        var cifrado = CryptoJS.AES.encrypt(texto, clave);
        document.getElementById("cifracion").innerHTML=cifrado;
        descargar(textoo(cifrado), 'Cifradode192.txt');

}

function cifrar3(){
    let texto = document.getElementById("texto").value;
    let clave = document.getElementById("clave").value;

        var cifrado = CryptoJS.AES.encrypt(texto, clave);
        document.getElementById("cifracion").innerHTML=cifrado;
        descargar(textoo(cifrado), 'Cifradode256.txt');
    
}

function descifrar(){
    var numerillo = document.getElementById("numerillo").value;
     
    if(numerillo=="128"){
        descifrar1()
    }
    if(numerillo=="192"){
        descifrar2()
    }
    if(numerillo=="256"){
        descifrar3()
    }
}

function descifrar1(){
    let texto = document.getElementById("cifracion").value;
    let clave = document.getElementById("clave").value;

        var descifrado = CryptoJS.AES.decrypt(texto, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargar(textoo(descifrado.toString(CryptoJS.enc.Utf8)), 'descifrado128.txt');

}

function descifrar2(){
    let texto = document.getElementById("cifracion").value;
    let clave = document.getElementById("clave").value;

        var descifrado = CryptoJS.AES.decrypt(texto, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargar(textoo(descifrado.toString(CryptoJS.enc.Utf8)), 'descifrado192.txt');
    
}

function descifrar3(){
    let texto = document.getElementById("cifracion").value;
    let clave = document.getElementById("clave").value;

        var descifrado = CryptoJS.AES.decrypt(texto, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargar(textoo(descifrado.toString(CryptoJS.enc.Utf8)), 'descifrado256.txt');
    

}


