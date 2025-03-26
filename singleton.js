class database {
    constructor () {
        if(!database.instance){ // se não existe uma instancia da db
            database.instance = this // criar ela
        }
        return database.instance // se existir, retorna a instancia que ja existe


    }
}

const db1 = new database ()
const db2 = new database ()

console.log(db1 === db2)
