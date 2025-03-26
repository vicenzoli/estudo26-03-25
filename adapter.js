
class OldMessagingSystem {
    sendOldMessage() {
        return "Mensagem enviada usando o sistema antigo.";
    }
}


class NewMessagingSystem {
    sendNewMessage(message) {
        console.log(`Nova mensagem: ${message}`);
    }
}


class MessagingAdapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }

    sendAdaptedMessage() {
      
        const message = this.oldSystem.sendOldMessage();
        return `Adaptado: ${message}`;
    }
}


const oldSystem = new OldMessagingSystem();
const adapter = new MessagingAdapter(oldSystem);

const newSystem = new NewMessagingSystem();
const adaptedMessage = adapter.sendAdaptedMessage();


newSystem.sendNewMessage(adaptedMessage);
