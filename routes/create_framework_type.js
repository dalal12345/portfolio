const allLanguage = require("../database/db");
const router = require("express").Router();


router.get("/create_framework_type",(req,res)=>{
    res.status(200).sendFile(__dirname + "/views/create_framework_type.html");    });

router.post("/create_framework_type", async (req, res) => {
    const { framework_type } = req.body;
    try {
        await allLanguage.FrameworkType.create({ "framework_type": framework_type });
        res.status(200).send("Framework type created successfully");
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;