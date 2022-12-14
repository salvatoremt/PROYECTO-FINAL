const modeloDBlegends = {
    queryGetfighters: "SELECT * FROM DBnetflix",
    queryGetfightersById: `SELECT * FROM netflix WHERE ID = ?`,
    queryDeletedfighter: `UPDATE DBlegends SET Activo = 'N' WHERE ID = ?`,
    queryfighterexist: `SELECT Luchador FROM netflix WHERE usuarios = '?'`,
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
       ?,
       ?
      
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

   queryupdatebyfighter:`UPDATE DBlegends SET (   
     usuario, 
     peliculas= ?,
     series?,
     genero=? ,
     clasificaciones=?,
     paquetes=?,
     Episodios=?,
     Activo=?
     WHERE DBnetflix=?`,



   
}

module.exports = modeloDBnetflix