'use strict';

module.exports = function(Juego) {
/**
 * devuelve nombre de un juego
 * @param {Function(Error, string)} callback
 */

Juego.prototype.getNombre = function(callback) {

  callback(null, this.nombre);
};



};
