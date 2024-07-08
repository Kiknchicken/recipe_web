import express from 'express';
import cookieParser from 'cookie-parser';

const router = express.Router();

router.use(cookieParser());

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
});

router.post("/", (req, res) => {
    console.log("userlanding");

    //Grabbing user login cookie
    let decodedCookie = decodeURIComponent(req.cookies);
    console.log(util.inspect(decodedCookie, false, null));

    res.render("userLanding");
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


export { router };