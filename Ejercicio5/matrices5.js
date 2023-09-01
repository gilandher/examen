function sa(arreglo1,arreglo2){
    //if (arreglo1.length !== arreglo2.length){
       // return;
    //}

    let g = arreglo1.map((valor,indice) => valor + arreglo2[indice]);
    return g;
}

const arreglo1 = [5,6,6,10,7];
const arreglo2 = [1,3,4,8,9,3];
const resultado = sa(arreglo1,arreglo2);
console.log("El Resultado de toda suma es: " + resultado);