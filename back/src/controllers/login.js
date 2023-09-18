const { User } = require("../db");

const login = async (req, res) => {
    //esta informacion sensible nunca va por query ni params, siempre por body en un proyecto
 const { username, password } = req.query;
 try {
    if(!username || !password) res.satus(400).json({ message: "Faltan datos"});
    // buscar un registro en cuanto al username que buscamos
    const user = await User.findOne({where: {username}})
    if(!user) res.status(404).json({message: "Usuario no encontrado"});

    user.password === password 
    ? res.status(200).json({ access: true, id: user.id})
    : res.status(403).json({message: "Contraseña incorrecta"});
    
 } catch (error) {
    res.status(500).json({error: error.message})
 }

}

module.exports = login;