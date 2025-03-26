
class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler; 
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return `Nenhum manipulador pôde processar a solicitação: ${request}`;
    }
}


class SupportAgent extends Handler {
    handle(request) {
        if (request === "simples") {
            return "Solicitação simples resolvida pelo atendente.";
        }
        return super.handle(request);
    }
}


class Supervisor extends Handler {
    handle(request) {
        if (request === "moderada") {
            return "Solicitação moderada resolvida pelo supervisor.";
        }
        return super.handle(request);
    }
}


class Manager extends Handler {
    handle(request) {
        if (request === "complexa") {
            return "Solicitação complexa resolvida pelo gerente.";
        }
        return super.handle(request);
    }
}


const supportAgent = new SupportAgent();
const supervisor = new Supervisor();
const manager = new Manager();


supportAgent.setNext(supervisor).setNext(manager);


console.log(supportAgent.handle("simples"));    
console.log(supportAgent.handle("moderada")); 
console.log(supportAgent.handle("complexa"));  
console.log(supportAgent.handle("desconhecida")); 
