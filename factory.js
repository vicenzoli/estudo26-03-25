class Notificacao {
    enviarNotif(mensagem){
        console.log(mensagem) // enviar notificacao
    }
}

class NotificacaoSMS extends Notificacao {
    enviarNotif(mensagem){
        console.log(`mensagem via sms ${mensagem}`) // enviar notificacao
    }

}
class NotificacaoEMAIL {
    enviarNotif(mensagem){
        console.log(`mensagem via EMAIL ${mensagem}`)
    }
}

class FactoryNotificacao{
    static criarNotificacao() {
        switch (tipo){
            case 'sms':
            return new NotificacaoSMS()
            
            case 'EMAIL' :
                return new NotificacaoEMAIL()
                default:
                    throw new Error("tipo desconhecido");
        }
    }
}

const notif2 = FactoryNotificacao.criarNotificacao('email').enviarNotif('aqui vai o email')