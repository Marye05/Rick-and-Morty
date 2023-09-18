const { Favorite } = require("../db");

const deleteFav = async ( req, res ) => {
    const { id } = req.params;
    const { idUser } = req.query;
    try {
        //vamos a eliminar el id de la relacion del usuario
        const fav = await Favorite.findOne({where: {id}});
        
        await fav.removeUser(idUser);

        res.status(200).json({ success: true});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}; 

module.exports = deleteFav;