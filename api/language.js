const allLanguage = require("../database/db");
const router = require("express").Router();

router.get("/api/language", async (req, res) => {
    try {
        const allLanguages = await allLanguage.Language.find().sort({ language_name: 1 });
        res.status(200).json(allLanguages);
    } catch (e) {
        console.log(e)
    }});


module.exports = router;