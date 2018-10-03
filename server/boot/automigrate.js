module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

app.models.Juego.create([{
      nombre: 'Bel Cafe',
      descripcion: 'Vancouver',
      imagen:'imagen juego',
      grupal:false		
    },{
      nombre: 'Bel Cafe',
      descripcion: 'Vancouver',
      imagen:'imagen juego',
      grupal:false		
    },{
      nombre: 'Bel Cafe',
      descripcion: 'Vancouver',
      imagen:'imagen juego',
      grupal:false		
    }], function(err, Juego) {
      if (err) throw err;

      console.log('Models created: \n', Juego);
    });

  });
};

