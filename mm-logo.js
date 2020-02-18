function drawLogo() {
    var n = document.getElementById('number').value;

    for(var y = n + 1; y >= 0; y--) {
        document.getElementById('canvas').innerHTML += `${('_').repeat(n)} ${('*').repeat(n)} ${('_').repeat(n)} ${('*').repeat(n)} ${('_').repeat(2*n)} ${('*').repeat(n)} ${('_').repeat(n)} ${('*').repeat(n)} ${('_').repeat(n)}`;
    }
}

function deleteLogo() {
    document.getElementById('canvas').innerHTML ='';
}