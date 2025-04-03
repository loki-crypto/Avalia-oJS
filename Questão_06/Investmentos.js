function calcularInvestimento() {
    const C = parseFloat(prompt("Capital inicial:"));
    const i = parseFloat(prompt("Taxa de juros mensal (%):")) / 100;
    const t = parseInt(prompt("Tempo em meses:"));
    
    const M = C * Math.pow(1 + i, t);
    
    console.log("Montante:", M.toFixed(2));
}

calcularInvestimento();
