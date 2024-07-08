import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
});

router.post("/", (req, res) => {
    console.log("userlanding");

    //Grabbing user login cookie
    let name = "payload=";
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);

    res.render("userLanding");
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


export { router };