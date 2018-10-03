module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

app.models.Juego.create([{
      nombre: 'pelota',
      descripcion: 'juego pelota',
      imagen:'imagen juego',
      grupal:false		
    },{
      nombre: 'pelota2',
      descripcion: 'juego pelota',
      imagen:'imagen juego',
      grupal:false		
    },{
      nombre: 'pelota3',
      descripcion: 'juego pelota',
      imagen:'imagen juego',
      grupal:false		
    }], function(err, Juego) {
      if (err) throw err;

      console.log('Models created: \n', Juego);
    });

  });
};

