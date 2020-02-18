function drawLogo() {
    var n = document.getElementById('number').value;

    if(n%2 != 0 && n > 0 && n < 10000) {
        document.getElementById('one').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('two').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('three').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('four').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('five').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('six').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('seven').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('eight').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('nine').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);

        document.getElementById('ten').innerHTML =
        ('-').repeat(n) + ('*').repeat(n-n) + '<br>'

        + ('-').repeat(n-1) + ('*').repeat(n-2) + '<br>'

        + ('-').repeat(n-2) + ('*').repeat(n-1) + '<br>'

        + ('-').repeat(n-n) + ('*').repeat(n);
    }

}


function deleteLogo() {
    document.getElementById('canvas').innerHTML ='';
}