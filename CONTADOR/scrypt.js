var btnMais = document.getElementById('btn+')
var btnReset = document.getElementById('btnreset')
var btnMenos = document.getElementById('btn-')
var btnContador = document.getElementById('numero')
var intervaloIncremento
var vlrCont = 0

function alteraValor (){
    btnContador.innerHTML = vlrCont
}

function adicionaNumero(){

    vlrCont += 1 
    alteraValor()
    
}

function diminuiNumero(){

    vlrCont -= 1 
    alteraValor()
    
}

function comecarIncremento () {
    intervaloIncremento = setInterval(adicionaNumero, 100)
}

function paraContagem (){
    clearInterval(intervaloIncremento)
}

function comecarDecremento () {
    intervaloIncremento = setInterval(diminuiNumero, 100)
}

function resetaValor (){
    vlrCont = 0 
    alteraValor()
}