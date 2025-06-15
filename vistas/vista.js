const express=require('express')
const app=express()
app.use(express.json())
const {createClient}=require('redis')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
app.get("/v",async(req,res)=>{
    const vistas=await cliente.incr("marcador::v")
    return res.json({"cantidad de vistas ":vistas})
})
app.get("/t",async(req,res)=>{
    const total_vistas=await cliente.get("marcador::v")
    return res.json({message:`Total de vistas ${total_vistas}`})
})
app.listen(5000,()=>{
    console.log("corriendo")
})