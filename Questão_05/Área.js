function calcularCirculo() {
    const raio = parseFloat(prompt("Digite o raio do círculo:"));
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    console.log("Área:", area.toFixed(2));
    console.log("Perímetro:", perimetro.toFixed(2));
}

calcularCirculo();
