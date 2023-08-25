const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);
function imc() {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /* fazendo comparação lógica */

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'peso ideal';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificacao = 'obesidade grau 1';
        } else if (valorIMC < 40) {
            classificacao = 'obesidade grau 2';
        } else {
            classificacao = 'obesidade grau 3';
        }
        /* Enviando o resultado pra a <DIV> com id="Resultado" */
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e vocÊ está ${classificacao}`;

    } else {
        resultado.textContent = "Preencha todos os campos";

    }


};