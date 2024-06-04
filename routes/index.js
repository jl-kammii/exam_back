const express = require("express");
const router = express.Router();
const controllerBlague = require("../controllers/index");

router.get("/", (req, res) => {
    res.status(200).json({ success: "RACINE API" });
});

router.post("/", (req, res) => {
    res.status(200).json({ success: "bounty" });
});

router.get("/blague", controllerBlague.find);

router.post("/blague", controllerBlague.create);

router.get("/blague/:id", controllerBlague.findById);

router.get("/blague/random", controllerBlague.random);

module.exports = router;