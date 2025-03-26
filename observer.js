class Loja{
    constructor(){
        this.assinantes = []
    }
    assinar(usuario){
        this.assinantes.push(usuario)

    }
    cancelarAssinatura(){
        // remover usuario da lista

    }
    notificar(){
        this.assinantes.forEach(assinantes => assinantes.update(novaMSG))
    }
}
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    update(novaMSG){
        console.log( `notificacao com ${novaMSG}`)
    }
}
const loja = new Loja()
const pessoa = new Pessoa('ramon')
loja.assinar(pessoa)
loja.notificar('enviando a primeira notificacao')