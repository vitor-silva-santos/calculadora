const resultado = document.getElementById("result")
const historico = document.getElementById("historico")
const btnCalcular = document.getElementById("calcular")
const btnLimpar = document.getElementById("limpar")
const btnVoltar = document.getElementById("voltar")

function inserir(element) {
    resultado.innerText += element
    historico.innerHTML = ""
}

const calcular = () => {
    if (resultado.innerHTML) {
        let result = eval(resultado.textContent)
        historico.innerHTML = resultado.textContent + " ="
        resultado.innerHTML = result 
    } 
}

const limpar = () => {
    resultado.innerHTML = ""
    historico.innerHTML = ""
}

const voltar = () => {
    let res = resultado.innerHTML;
    resultado.innerHTML = res.substring(0, res.length - 1);
    historico.innerHTML = ""
}

btnCalcular.addEventListener("click", calcular)
btnLimpar.addEventListener("click", limpar)
btnVoltar.addEventListener("click", voltar)


