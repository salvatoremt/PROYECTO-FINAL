const modeloUsuarios = {
    queryGetUsers: "SELECT * FROM Usuarios",
    queryGetUsersById: `SELECT * FROM Usuarios WHERE ID = ?`,
    queryDeleteduser: `UPDATE usuarios SET Activo = 'N'WHERE ID ?`,
    queryuserexist: `SELECT Usuario FROM Usuario WHERE Usuario = '?'`,
    queryadduser: `INSERT INTO Usuario (
       Usuario,
       peliculas,
       series,
       actualizaciones,
       Genero,
       clasificaciones,
       paquetes,
       Activo
    ) VALUES (
       '?',
       '?',
       '?',
       ?,
       '?',
       '?',
       '?',
       '?'
      
    )`,
    querygetuserinfo: `SELECT usuario, peliculas, series, actualizaciones, Genero, clasificaciones 
    FROM usuarios 
    WHERE usuarios = '?'`,

   queryupdatebyusuario:`UPDATE usuarios SET (
       usuarios,= '?',
       peliculas,='?',
       series,=? ,
       Genero,='?',
       clasificacion='?',
       WHERE Usuario = '?'`,

   querysignIn: `SELECT Usuario, Contrasena, Activo FROM Usuario WHERE Usuario = '?'`,    
}
const updateUsuario = (
   Usuario,
   peliculas,
   series,
   actualizaciones,
   Genero,
   clasificaciones,
   paquetes,
) => {
return `UPDATE usuarios SET (
  usuarios,= '${Usuario}',
  peliculas,='${peliculas}',
  series,= ${series},
  ${Genero ? `Genero = '${Genero}',` : ''}
  WHERE Usuario = '${Usuario}'`
}


module.exports = {modeloUsuarios ,updateUsuario}