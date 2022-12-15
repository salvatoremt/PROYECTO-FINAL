const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    const {texto1,texto2} = req.query
//if {
  //}
//}
if (!texto1){
    res.status(400).json({msg: "falta 'texto1'"})}

    if (!texto2){
        res.status(400).json({msg: " 'texto2'"})   
}
    res.status(200).json({msg:texto1+ ' ' + texto2})}


const hiMessage =  (req = request, res = response) => {
    const {name}= req.params
    res.status(200).json({msg:'hola ' + name})}


const byeMessage = (req = request, res = response) => {
        res.status(418).json({msg:"bienvenido netflix !"})}

const postMessage = (req = request, res = response) => {
    const{no_control, nombre}= req.body
   
    res.status(200).json({
        msg: `numero de control= ${no_control}, nombre= ${nombre}`})}

const putMessage = (req = request, res = response) => {
        res.status(403).json({msg:"mensaje PUT!"})}

const deleteMessage = (req = request, res = response) => {
        res.status(404).json({msg:"mensaje delete"})}                


    module.exports = {rootMessage , 
        hiMessage , 
        byeMessage, 
        postMessage, 
        putMessage, 
        deleteMessage
    } 
    