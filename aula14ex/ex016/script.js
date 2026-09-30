function contar() {
    var inicio = Number(document.getElementById('txti').value)
    var fim = Number(document.getElementById ('txtf').value)
    var passo = Number(document.getElementById ('txtp').value)
    if (passo == 0) {
    alert('Impossivel contar!')
            }
    while (inicio <= fim) {
        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + inicio
        inicio = inicio + passo
    }
} 