const {createClient}=require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
async function Listen(){
    console.log('📥 Suscrito al canal "chat"... Esperando mensajes...')
    await cliente.subscribe("redis:11",(mensage)=>{
        console.log("Mensaje resibido",mensage)
    })    
}
Listen()
