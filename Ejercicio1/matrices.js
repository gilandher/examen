var matriz  = [
    [2,4,8,7],
    [9,11,10,1],
    [7,3,8,5],
    [0,7,9,3],
];

var max = matriz [0][0];

for (var f = 0; f < 4; f++){
    for(var c = 0; c < 4; c++){
        if(matriz[f][c] > max ){
            max = matriz[f][c];

        }
    }
}

console.log("El numero mayor dentro la matrix 4x4 es: " + max);