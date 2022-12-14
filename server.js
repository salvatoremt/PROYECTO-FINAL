const express = require('express')
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const netflixRouter= require('./routes/dblegends')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages: "/api/v1/messages",
            usuarios: "/api/v1/usuarios",
            DBlegends:"/api/v1/netflix"
        }

        this.middlewares()
        this.routes()
    
    }

    routes(){
        this.app.use(this.paths.messages, messagesRouter),
        this.app.use(this.paths.usuarios, usuariosRouter)
        this.app.use(this.paths.netflixRouter,netflixRouter)
    }

    middlewares(){
        this.app.use(cors())//permite entradas 
        this.app.use(express.json())//habilita
    }

    listen(){
        this.app.listen(process.env.PORT, ()=> {
            console.log(process.env.PORT);
        })
    }
}

module.exports = Server