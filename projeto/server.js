const app = require("./src/app");
const port = 3000;

app.listen(port,()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})