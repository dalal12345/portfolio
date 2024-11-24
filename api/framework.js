const allLanguage = require("../database/db");
const router = require("express").Router();

router.get("/api/framework", async (req, res) => {
    try {

        const allFrameworks = await allLanguage.Framework.find().populate('language').populate('type');
        res.status(200).json(allFrameworks);

    } catch (e) {
        console.log(e)
    }});


module.exports = router;