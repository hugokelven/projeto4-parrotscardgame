selecionarJogo()

function selecionarJogo() {
    let numeroDeCartas = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")

    while (numeroDeCartas > 14 || numeroDeCartas < 4 || numeroDeCartas%2 !== 0) {
        numeroDeCartas = prompt("Quantas cartas você deseja? (números pares de 4 a 14)")
    }
}