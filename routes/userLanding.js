import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
});

router.post("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
    console.log(localStorage.getItem("jwt"));
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


export { router };