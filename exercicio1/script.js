function calcular() {
    let num1 = document.getElementById('valor1')
    let num2 = document.getElementById('valor2')
    let res = document.querySelector('div#res')
    if (num1.value.length == 0 || num2.value.length == 0) {
        window.alert('Por favor, preencha todos os campos!')
    } else {
        var soma = document.getElementById('soma')
        var sub = document.getElementById('sub')
        var mult = document.getElementById('mult')
        var div = document.getElementById('div')
        if (soma.checked) {
            let result = Number(num1 + num2)
        } else if (sub.checked) {
            let result = Number(num1 - num2)
        } else if (mult.checked) {
            let result = Number(num1 * num2)
        } else if (div.checked) {
            let result = Number(num1 / num2)
        }
        res.innerHTML = `O resultado é ${result}.`
    }
}   