
export function genBoard(seed, rule, numGenerations, width){

    // convert rule (integer) to binary representation
    // index 0 represents 000, where all 3 above are dead
    // index 1 represents 001, where top right is alive, others dead
    // index 5 represents 101, where top left & top right alive, others dead
    // and so on...

    var ruleMap = [];
    for (var shift = 0; shift < 8; shift++){
        ruleMap[shift] = (rule >> shift) % 2 === 1 ? 1 : 0; // bit shift to check if each binary digit 0 or 1
    }

    var result = [];
    result.push(seed);
    
    for(var gen = 1; gen <= numGenerations; gen++){
        var row = [];
        for (var col = 0; col < width; col++){
            row.push(cellState(ruleMap, gen, col, result));
        }
        result.push(row);
    }
    return result;
}


export function cellState (ruleMap, i, j, arr) {
    // need to implement cell wrap around
    var left = 0;
    var right = 0;
    var mid = arr[i-1][j];
    if ( j === 0){ // can only wrap around on columns
        left = arr[i-1][arr[0].length - 1];
        right = arr[i-1][j+1];
    } else if (j === arr[0].length - 1){
        right = arr[i-1][0];
        left = arr[i-1][j-1];
    } else {
        left = arr[i-1][j-1];
        right = arr[i-1][j+1];
    }
    return ruleMap[left * 4 + mid * 2 + right * 1];
}