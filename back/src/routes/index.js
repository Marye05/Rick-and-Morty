const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { postFav } = require("../controllers/postFav");
const { getFavs } = require("../controllers/getFavs");
const { deleteFav } = require("../controllers/deleteFav");
const { login } = require("../controllers/login");
const { postUser } = require("../controllers/postUser")


const router = Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});


router.post('/fav', (req, res) => {
    postFav(req, res);
});
router.get('/fav', (req, res) => {
    getFavs(req, res);
}); 

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
});


router.get('/login', (req, res) => {
    login(req, res);
});

router.post('/login', (req, res) => {
    postUser(req, res);
});


module.exports = router;