function fl(matriz) {
    return matriz.reduce((fmax,fila) => (fila.length > fmax.length ? fila : fmax),[]
)
}

var matriz = [
    [5,6,6],
    [5,3,4,4,4,4],
    [5,6],
    [5,6,6,10,7]
];

var resultado = fl(matriz);
console.log("la fila mas larga es: " + resultado);
