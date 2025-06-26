const {createClient} =require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)

const Systema=async()=>{
    console.log("Systema de actividad reciente")
    await cliente.hSet("producto:1",{nombre:"tele",precio:2000,type:"tv",calidad:"alta"})
    await cliente.hSet("producto:2",{nombre:"radio",precio:180,type:"aparato",calidad:"media"})
    await cliente.hSet("producto:3",{nombre:"muñeco",precio:35,type:"toy",calidad:"baja"})

    console.log("productos")
    const rank=await cliente.zAdd("productos",{score:220,value:"producto:1"})
    console.log(rank)
    await cliente.hSet("producto:1",{precio:170})
    await cliente.zAdd("productos",{score:150,value:"producto1"})   
    const data=await cliente.zScore("productos","producto1")
    console.log(data)
    console.log("Datos del producto:1")
    const p1=await cliente.hGetAll("producto:1")
    console.log("Producto 1",p1) 
    await cliente.quit()
}
Systema()
