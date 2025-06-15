const {createClient}= require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
async function StarHomework(){
    const tarea={
        id:new Date().getDate(),
        tipo:"correo_electronico",
        user:"nino@gmail.com" ,
        desti:"joshua"       
    }
    cliente.lPush("cola:tareas",JSON.stringify(tarea))
    console.log("Se envio la tarea a la cola",tarea)
    await cliente.quit()
}
StarHomework()