const {createClient}=require('redis')
const readline=require('readline')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
const express=require("express")
const app=express()
cliente.connect().catch(console.error)
async function Publication(){
    try{
        console.log("Bienvendio a la pagina")
      
        app.get("/p",async(req,res)=>{
            const likes=await cliente.INCR("likes:post")
            return res.status(200).json({message:`La cantidad de likes actual ${likes}`})
        })
        app.get("/t",async(req,res)=>{
            const total_likes=await cliente.get("likes:post")
            return res.status(200).json({message:`Total de like de la publicacion: ${total_likes}`})
        })
        
    }catch(err){
        console.error(err.message)
    }  

}
app.listen(5000,()=>{
            console.log("corriendo")
        })
Publication()