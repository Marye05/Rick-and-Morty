require("dotenv").config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite")


// esta es mi conexión con la base de datos
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}/${BDD}`,
    { logging: false, native: false }
);

FavoriteModel(database);
UserModel(database);

const { Favorite, User } = database.models;

Favorite.belongsToMany(User, { through: "UserFavorite", timestamps: false });
User.belongsToMany(Favorite, { through: "UserFavorite", timestamps: false });

module.exports = {
    database,
    ...database.models, // me llevo todos los modelos hacia afuera
}