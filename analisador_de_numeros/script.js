let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#sellist')
let msg = document.querySelector('div#msg')
let valores = []

function numValido(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numValido(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    tot = valores.length
    if (tot == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        media = soma / tot
        msg.innerHTML = ''
        msg.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        msg.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        msg.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        msg.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        msg.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
