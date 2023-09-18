const { User } = require("../db")

const postUser =  async (req, res) => {
    const { username, password } = req.body;
    try {
        // si no existe el username o sino existe el password responde con el error
        if(!username || !password) res.status(400).json({message: 'Faltan datos'})
        // en base a esta informacion sino consigue el usuario, lo va a crear con el metodo findorcreate
        // con el created nos regresara un booleano, el true si se creo o false sino 
        const [user, created] = await User.findOrCreate({ where: {username, password}})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = postUser;