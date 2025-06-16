const {createClient}=require('redis')
const readline=require('readline')
const cliente=createClient({
    host:"localhost",
    port:"6379"
})
cliente.connect().catch(console.error)
async function StarChat(){
    console.log("Weelcome a este minichat")
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    console.log("Escribee un mensaje para enviarlo al canal chat")
    rl.on('line',async(input)=>{
        if(input.trim()!==""){
            await cliente.publish("redis:11",input.trim())
            console.log("Mensaje eneviado")
        }
    })
    
   
}
StarChat()