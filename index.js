let resultHl = document.getElementById("result-H")
let resultGl = document.getElementById("result-G")

let resultH = 0
let resultG = 0

function add1H(){
    resultH += 1
    resultHl.textContent = resultH
}

function add2H(){
    resultH += 2
    resultHl.textContent = resultH
}

function add3H(){
    resultH += 3
    resultHl.textContent = resultH
}

function add1G(){
    resultG+= 1
    resultGl.textContent = resultG
}

function add2G(){
    resultG += 2
    resultGl.textContent = resultG
}

function add3G(){
    resultG += 3
    resultGl.textContent = resultG
}