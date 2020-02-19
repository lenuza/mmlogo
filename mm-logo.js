function drawLogo () {
    var n = +(document.getElementById('number').value);

    if(n%2 != 0 && n > 0 && n < 10000) {

        document.getElementById('canvas').innerHTML +=
        mergeSegments(
            genCompStair(n),
            genCompTwo(n),
            flipVertCompTwo(n),
            flipHorizontallyStair(n)
        );
    }
}

function genCompStair (n) {
    var stair = [];

    for(var y = n; y >= 0; y--) {
        stair.push(('-').repeat(n - (n - y)).concat(('*').repeat(n - y))) + '\n';
    }

    return stair;
}

function genCompTwo (n) {
    var compTwo = [];

    for(var y = n/2; y >= 0; y--) {
        compTwo.push(('*').repeat(n)) + '\n';
    }
    for(var y = 0; y <= n/2; y++) {
        compTwo.push(('*').repeat(Math.floor(n/2) - y).concat(('-').repeat(y+1)).concat(('-').repeat(y)).concat(('*').repeat(Math.floor(n/2) - y))) + '\n';
    }

    return compTwo;
}

function flipHorizontallyStair (n) {
    var flipStair = [];

    for(var y = n; y >= 0; y--) {
        flipStair.push(('*').repeat(n - y).concat(('-').repeat(n - (n - y)))) + '\n';
    }

    return flipStair;
}

function flipVertCompTwo (n) {
    var flipCompTwo = [];

    for(var y = 0; y <= n/2; y++) {
        flipCompTwo.push(('*').repeat(y).concat(('-').repeat((Math.floor(n/2) - y) + 1)).concat(('-').repeat(Math.floor(n/2) - y)).concat(('*').repeat(y))) + '\n';
    }
    for(var y = n/2; y >= 0; y--) {
        flipCompTwo.push(('*').repeat(n)) + '\n';
    }

    return flipCompTwo;
}

function deleteLogo() {
    document.getElementById('canvas').innerHTML ='';
}

function mergeSegments (stair, compTwo, flipCompTwo, flipStair) {
    var concatArrays = new Array();

    concatArrays[0] = stair;
    concatArrays[1] = compTwo;
    concatArrays[2] = flipCompTwo;
    concatArrays[3] = compTwo;
    concatArrays[4] = flipStair;
    concatArrays[5] = stair;
    concatArrays[6] = compTwo;
    concatArrays[7] = flipCompTwo;
    concatArrays[8] = compTwo;
    concatArrays[9] = flipStair

    return showLine(concatArrays)
}

function showLine (concatArrays) {
    var toshow = '';

    for (let j = 0; j < concatArrays[0].length; j++) {
        for (let i = 0; i < concatArrays.length; i++) {
            toshow += concatArrays[i][j];
        }
        toshow += '\n';
    }

    return toshow;
}