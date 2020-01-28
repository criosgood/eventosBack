const models = require("../database/models");

module.exports = {
    findAll: function (cb) {
        // Find all users
        models.tipificaciontel.findAll().then(tipificaciones => {
            cb(null, tipificaciones);
        });
    },
    create: function (tipificacion, cb) {
        // Find all users
        return models.sequelize.transaction((t1) => {
            return models.tipificaciontel.create(tipificacion).then(tipificacion => {
                return tipificacion;
            });
        }).then(function (result) {
            if (result) {
                console.debug('Resultado despues de crear tipificacion :::: >', result);
                var tipificacionCreated = result.dataValues;
                cb(null, tipificacionCreated);
            } else {
                cb(null, null);
            }

        }).catch(function (err) {
            cb(err, null);
        });
    },
    getById: function (idtipificacion, cb) {
        // Find all users
        return models.sequelize.transaction((t1) => {
            return models.tipificaciontel.findByPk(idtipificacion).then(tipificacion => {
                return tipificacion;
            });
        }).then(function (result) {
            if (result) {
                console.debug('Resultado despues get By Id :::: >', result);
                var tipificacion = result.dataValues;
                cb(null, tipificacion);
            } else {
                cb(null, null);
            }
        }).catch(function (err) {
            cb(err, null);
        });
    }
}