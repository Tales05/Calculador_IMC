const nome = document.querySelector(".nome");
const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const botaoConsultar = document.querySelector("#botaoConsultar");
const respostaImc = document.querySelector(".resultadoImc");

botaoConsultar.addEventListener('click', () => avaliaInformacao());


function avaliaInformacao(){
    const pesoInfo = Number(peso.value)
    const alturaInfo = Number(altura.value);
    if(nome.value.length < 4 ){
        alert('Nome incompleto!')
    }else if(pesoInfo <= 1){
        alert('Peso muito abaixo!')
    }else if(alturaInfo < 0){
        alert('Altura muito abaixo!')
    }else {
        calcularImc(pesoInfo,alturaInfo);
    }
} 

function calcularImc(pesoInfo,alturaInfo){
    const nomePessoa = nome.value;
    const cauculoIMC = pesoInfo/(alturaInfo * alturaInfo);
    if(cauculoIMC <= 18.49) {
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Baixo Peso!!`  
    }else if(cauculoIMC <= 24.99) {
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Peso Ideal.`
    }else if(cauculoIMC <= 29.99) {
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Sobrepeso.`
    }else if(cauculoIMC <= 34.99) {
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Obesidade grau I!!`
    }else if(cauculoIMC <= 39.99){
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Obesidade grau II!!`
    }else {
        respostaImc.innerHTML = `${nomePessoa} seu resultado IMC é de ${cauculoIMC.toFixed(2)}, você está com Obesidade grau III!!`
    }

}

