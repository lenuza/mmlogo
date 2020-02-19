function drawLogo () {
    var n = +(document.getElementById('number').value);

    if(n%2 != 0 && n > 0 && n < 10000) {

            document.getElementById('canvas').innerHTML +=
                show(
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
        stair = stair.concat(('-').repeat(n - (n - y)).concat(('*').repeat(n - y))) + '\n';
    }

    console.log(stair)
    return stair;
}

function genCompTwo (n) {

    var compTwo = [];

    for(var y = n/2; y >= 0; y--) {
        compTwo = compTwo.concat(('*').repeat(n)) + '\n';
    }
    for(var y = 0; y <= n/2; y++) {
        compTwo = compTwo.concat(('*').repeat(Math.floor(n/2) - y).concat(('-').repeat(y+1)).concat(('-').repeat(y)).concat(('*').repeat(Math.floor(n/2) - y))) + '\n';
    }

    console.log(compTwo)
    return compTwo;
}

function flipHorizontallyStair (n) {
    var flipStair = [];

    for(var y = n; y >= 0; y--) {
        flipStair = flipStair.concat(('*').repeat(n - y).concat(('-').repeat(n - (n - y)))) + '\n';
    }
    flipStair
    console.log(flipStair)
    return flipStair;
}

function flipVertCompTwo (n) {

    var flipCompTwo = [];

    for(var y = 0; y <= n/2; y++) {
        flipCompTwo = flipCompTwo.concat(('*').repeat(y).concat(('-').repeat((Math.floor(n/2) - y) + 1)).concat(('-').repeat(Math.floor(n/2) - y)).concat(('*').repeat(y))) + '\n';
    }
    for(var y = n/2; y >= 0; y--) {
        flipCompTwo = flipCompTwo.concat(('*').repeat(n)) + '\n';
    }

    console.log(flipCompTwo)
    return flipCompTwo;
}

function deleteLogo() {
    document.getElementById('canvas').innerHTML ='';
}

// function show (f1, f2, f3, f4, f5) {
// }

function show (arr) {
    var toshow = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            toshow += arr[i][j];
        }
        toshow += '\n'
    }

    return toshow;
}