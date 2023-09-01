let matriz = [
    [1,3,3],
    [2,4,3],
    [9,4,6],
    [2,4,4,4]
]

function ct(item, items) {
    let cont = 0;
    for (let f = 0; f < items.length; f++) {
        for (let c = 0; c < items[f].length; c++) {
            if (item === items[f][c]) { 
                cont = cont + 1;
            }
        }
    }
    return cont;
    }

console.log(ct(1,matriz));
