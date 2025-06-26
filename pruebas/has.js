const {createClient}=require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
const PracticaHashes=async()=>{
    const objetoPersona={
        user:"joshua",
        destino:"nino",
        mensaje:"lee estee mensaje",
        tipo:"correo",
        fecha:new Date().toLocaleDateString()
    }
    const objetoPersona2={ 
        user:"ichika",
        destino:"miku",
        mensaje:"miku me comi el pastel",
        tipo:"correo",
        fecha:new Date().toLocaleDateString()
    }
    const objetoPersona3={
        user:"miku",
        destino:"itsuki",
        mensaje:"itsuki te comiste mi pastel?",
        tipo:"correo",
        fecha:new Date().toLocaleDateString()
    }
    
    const user1=await cliente.hSet("clave::1","user:joshua",JSON.stringify(objetoPersona))
    const user2=await cliente.hSet("clave::2",{ 
        user:"ichika",
        destino:"miku",
        mensaje:"miku me comi el pastel",
        tipo:"correo",
        fecha:new Date().toLocaleDateString()
    })
   
     const hash=await cliente.hGet("clave::2","tipo")
     console.log(hash)
        
    
    await cliente.quit()

}
PracticaHashes()