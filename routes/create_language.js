const allLanguage = require("../database/db");
const router = require("express").Router();


router.post('/addLanguage', async (req, res) => {
    let x= 0;
    console.log("Post send ",x++)
    console.log(req.body)
    const { language_name } = req.body;
    try {
        await allLanguage.Language.create({ "language_name":language_name });
        res.status(200).send("Language created successfully");
    } catch (e) {
        console.log(e)
    }

});

module.exports = router;