const express  = require("express");
const {exec} = require("child_process");
const router = express.Router();

router.get("/", async (req, res) => {
    res.sendFile(process.cwd()+ "/views/home.html")
})
router.get("/lab", async (req, res) => {
    res.sendFile(process.cwd()+ "/views/lab.html")
})
router.post("/lab", async (req, res) => {
    // Execute a command via terminal
    console.log(req.body);
    let {lab, data, dir} = req.body;
    let ext = lab || data || dir;
    let sdData = "";
    let sdDir = "";
    exec(ext, (error, stdout, stderr) => {
        if(error){
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr){
            console.log(`stderr: ${stderr.message}`)
        }
        console.log(`stdout: ${stdout}`);
        res.render(process.cwd()+ "/views/lab.ejs", {sdData: stdout})
    })
})
module.exports = router;