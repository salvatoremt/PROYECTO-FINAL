const { request, response } = require("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const modelonetflix = require("../models/netflix");
const getfighters = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const users = await conn.query(modelonetflix.queryGetfighters, (error) => {throw new Error(error)})

    if (!users) {
        res.status(404).json({msg: "no se encontraron registros"})
        return
    }
    res.json({users})
 } catch (error) {
    console.log(error)
    res.status(500).json({error})
 } finally{
    if (conn) {
        conn.end()
    }
 }
}
const getfightersByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
  
      const [user] = await conn.query(modelonetflix.queryGetfightersById,[id], (error) => {throw new Error(error)})
  
      if (!user) {
          res.status(404).json({msg: `no se encontro registro con el ID ${id}`})
          return
      }
      res.json({user})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}
const deletefightersByID = async (req = request, res = response) => {
   const {id} = req.query
   let conn;
   try {
      conn = await pool.getConnection()
      const {affectedRows} = await conn.query( modelonetflix.queryDeletedfighter,[id], (error) => {throw new Error(error)})
  
      if (affectedRows=== 0) {
          res.status(404).json({msg: `No se pudo eliminar el registro con el ID ${id}`})
          return
      }
      res.json({msg: `la pelicula con ID ${id} se elimino correctamente`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}
const addfighter = async (req = request, res = response) => {
   const {
      usuarios,
      peliculas,
      series,
      generos,
      clasicaciones,
      actualizaciones,
      Episodios,
      paquetes,
      
   } = req.body
   if(      
   ! usuarios||
   ! peliculas||
   !series||
   !generos||
   ! clasicaciones||
   !actualizaciones||
   !Episodios||
   !paqutes||
   !Activo
   ){
      res.status(400).json({msg: "Falta informacion del usuario"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modelonetflix.queryfighterexist,[usuarios])

      if(!user){
         res.status(403).json({msg: `El Usuario ${peliculas} ya se encuentra registrado`})
         return
      }

      const salt = bcryptjs.genSaltSync()

      const affectedRows = await conn.query(modelonetflix.queryaddfighter,[
          usuarios,
      peliculas,
      series,
      generos,
      clasicaciones,
      actualizaciones,
      paquetes,
         Activo
      
      ] , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar mas usuarios ${peliculas}`})
         return
   }
      res.json({msg: `peliculas ${genero} se agrego correctamente :D`})
      return
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}

const updatefighterZByfighter = async (req = request, res = response) => { const {
       usuarios,
      peliculas,
      series,
      generos,
      clasicaciones,
      actualizaciones,
      paquetes,
      Activo
   } = req.body
   if(      
    ! usuarios||
   ! peliculas||
   !series||
   !generos||
   ! clasicaciones||
   !actualizaciones||
   !paqutes||
      !Activo
   )
   {
      res.status(400).json({msg: "Falta informacion del guerrero z"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modelodblegends.queryGetfighters, [Luchador])

      if(user){
         res.status(403).json({msg: `El usuario ${peliculas} no se encuentra registrado`})
         return
      }

      const affectedRows = await conn.query(modelonetflix.queryupdatebyfighter[
         Clave || user.Clave,
            usuarios || user.usuarios,
            peliculas || user.peliculas,
            series || user.series,
            genero || user.genero,
            clasicaciones || user.clasificaciones,
            actualizaciones || user.actualizaciones,
            Activo
      ]
        
      , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del usuario ${Luchador}`})
         return
   }
      res.json({msg: `el usuario ${peliculas} se actualizo correctamente :D`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}


module.exports = {getfighters,getfightersByID,deletefightersByID,addfighter,updatefighterZByfighter}