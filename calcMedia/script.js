function calcularMedia(){
    var nota1 = parseFloat(document.getElementById('n1'))
    var nota2 = parseFloat(document.getElementById('n2'))
    var nota3 = parseFloat(document.getElementById('n3'))
    var res = document.getElementById('res')
    var media = (nota1+ nota2 + nota3) / 3

    if(media>= 7){
        res.textContent = `${media.toFixed(2)} - passou de ano`

    }else{
        res.textContent = `${media.toFixed(2)} - não passou de ano`
    }

}