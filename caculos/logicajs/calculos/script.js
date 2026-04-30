function somar(){
    var numero1=document.getElementById('n1').valueAsNumber
    var numero2=document.getElementById('n2').valueAsNumber
    var res = document.getElementById('res')
    res.textContent= numero1 + numero2
}
    function dividir(){
        var n3 = parseFloat(document.getElementById("n3").value)
        var n4 = parseFloat(document.getElementById("n4").value)
        var res = document.getElementById("resDiv")
        if(n4!==0){
            res.textContent= n3 / n4
        }else{
            res.textContent= "não divide por 0"
        }
    }
