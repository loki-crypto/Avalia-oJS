function contarParesImpares() {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números pares:", pares);
    console.log("Números ímpares:", impares);
}

contarParesImpares();
