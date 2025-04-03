function calcularSalarioAtual() {
    let salario = parseFloat(prompt("Digite o salário inicial:"));
    let percentual = 0.0015; 

    for (let ano = 1997; ano <= new Date().getFullYear(); ano++) {
        percentual *= 2;
        salario += salario * percentual;
    }

    console.log("Salário atual:", salario.toFixed(2));
}

calcularSalarioAtual();
