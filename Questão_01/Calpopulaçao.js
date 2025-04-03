function calcularAnos() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let anos = 0;
    const taxaA = 0.03;
    const taxaB = 0.015;

    while (populacaoA <= populacaoB) {
        populacaoA += populacaoA * taxaA;
        populacaoB += populacaoB * taxaB;
        anos++;
    }

    return anos;
}

console.log("Anos necessários:", calcularAnos());
