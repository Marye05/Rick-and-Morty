const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs")

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);



router.post("/rickandmorty/fav", (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: "ok"});
});
router.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
});
router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter((char) => char.id != id);
    res.status(200).json({ status: "ok"});
});
// esta funcion decir lo q hay que hacer, mas no hacerlo
// hacer lo q tenga q hacer, extraer la informacion que me llega por params
// llamar a una funcion, q haga el llamado al servicio externo
// guardar informacion en la base de datos
// la responsabilidad de los controladores, es controlar, no hacerlo,solo gestiona

// EXPRESS es " unopinionated", no nos da escritas las reglas d como trabajarla
// no exije una estructura, por eso es flexible

module.exports = router;
