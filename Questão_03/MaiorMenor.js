function analisarNumeros() {
    const n = parseInt(prompt("Quantos números deseja inserir?"));
    const numeros = [];

    for (let i = 0; i < n; i++) {
        numeros.push(parseFloat(prompt(`Digite o ${i + 1}º número:`)));
    }

    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    const soma = numeros.reduce((acc, num) => acc + num, 0);

    console.log("Menor valor:", menor);
    console.log("Maior valor:", maior);
    console.log("Soma dos valores:", soma);
}

analisarNumeros();
