const allLanguage = require("../database/db");
const router = require("express").Router();

router.get("/api/framework_type", async (req, res) => {
    try {
        const allFrameworkTypes = await allLanguage.FrameworkType.find().sort({ framework_name: 1 });
        res.status(200).json(allFrameworkTypes);
    } catch (e) {
        console.log(e)
    }
});


module.exports = router;