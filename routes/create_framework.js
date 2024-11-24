const allLanguage = require("../database/db");
const router = require("express").Router();



router.get("/create_framework",(req,res)=>{
    res.status(200).sendFile(__dirname + "/views/create_framework.html");
});

router.post("/create_framework", async (req, res) => {
    const { framework_name, language, framework_type } = req.body;
    console.log(req.body)
    try {
        await allLanguage.Framework.create({ "framework_name": framework_name, "language": language, "type": framework_type });
        res.status(200).send("Framework created successfully");
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;