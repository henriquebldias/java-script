/*let num = [4, 6, 12, 1, 5, 9]
console.sort()

//num.lenght - tamanho
//num.sort() - ordena
//num.push() - insere
//num.indexOf() - posição  

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

function parimp(n){
    //...
}*/

//[] serve para declaração de arrays
//{} serve para declaração de objetos

let amigo = { nome:'Jonas', 
idade:'20', 
altura:'1.65', 
peso:'58.5', 
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
} } // Posso guardar atributos e funções dentro de um objeto
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)