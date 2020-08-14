function runTest() {
    var input = document.getElementById('input')
    var output = document.getElementById('output')

    var angka = parseInt(input.value)
    if (isNaN(angka)) {
        output.innerHTML = 'Maaf, Harus input Angka.'
    } else {
        output.innerHTML = angks * 2
    }
}