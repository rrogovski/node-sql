const { Model, DataTypes } = require('sequelize');

class User extends Model {
    // Uma outra forma de usar o init
    // static init(connection) {
    //     super.init({
    //         name: DataTypes.STRING,
    //         email: DataTypes.STRING,
    //     }, {
    //         sequelize: connection,
    //     });
    // };

    // Outra forma de usar o init com ES6
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
        });
    };
};

module.exports = User;