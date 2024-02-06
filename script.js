// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


let textArea = document.getElementById('texto'); //text area
let btnEncrip = document.getElementById('btnEncript'); // boton encriptar
let btnDecrypt = document.getElementById('btnDecrypt'); // boton desencriptar
let btnCopiar = document.getElementById('btnCopiar'); // boton para copiar texto
let parrafoResultado = document.getElementById('textoResultado'); // parrafo donde se muestra el result

// evento de escucha para encriptar
btnEncrip.addEventListener('click', function(){
    let text = textArea.value;
    // objeto para mapear los char
    let replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    text = text.replace(/[eiaou]/g,function(match){
        return replacements[match];
    });
    // console.log(text);
    parrafoResultado.innerText = text;
});

// evento de escuchar para desencriptar
btnDecrypt.addEventListener('click', function(){
    let text = textArea.value;
    // objeto para mapear los char
    let replacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    // para reemplazar las cadenas completas uso split(), luego join()
    for(let key in replacements){
        text = text.split(key).join(replacements[key]);
    }
    // console.log(text);
    parrafoResultado.innerText = text;
});


btnCopiar.addEventListener('click',function(){
    navigator.clipboard.writeText(parrafoResultado.innerText);
    alert('Texto Copiado !!');
})


