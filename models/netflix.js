const modelonetflix = {
    queryGetfighters: "SELECT * FROM DBnetflix",
    queryGetfightersById: `SELECT * FROM netflix WHERE ID = ?`,
    queryDeletedfighter: `UPDATE netflix SET Activo = 'N' WHERE ID = ?`,
    queryfighterexist: `SELECT peliculas FROM netflix WHERE usuarios = '?'`,
    queryaddfighter: `INSERT INTO netflix (
        Usuario,
      peliculas,
      series,
    actualizaciones,
     Genero,
    clasificaciones,
      paquetes,
        Activo
    ) VALUES ( 
       ?,
       ?,
       ?,
       ?,
       ?,
       ?,
       ?,
       ?,
       ?,
       ?,
      
    )`,

    querygetfighterinfo: `SELECT 
    Usuario,
  peliculas,
  series,
  actualizaciones,
  Genero,
  clasificaciones,
  paquetes,
    Activo
    FROM DBnetflix
    WHERE netflix = ?`,

   queryupdatebyfighter:`UPDATE netflix SET (   
     usuario, 
     peliculas= ?,
     series?,
     genero=? ,
     clasificaciones=?,
     paquetes=?,
     Activo=?
     WHERE DBnetflix=?`,



   
}

module.exports = modeloDBnetflix