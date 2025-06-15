const {createClient}= require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
async function ProsesarHomework(){
    console.log("Esperando tareas...")
    while(true){
        const respuesta=await cliente.brPop("cola:tareas",0)
        const tarea=JSON.parse(respuesta.element)
        console.log("Tarea recibida:",tarea)

        if(tarea.tipo="correo_electronico"){
            console.log(`Enviando correa a ${tarea.user}`)
        }
    }    
}
ProsesarHomework()