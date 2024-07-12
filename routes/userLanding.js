import express from 'express';
import cookieParser from 'cookie-parser';
import { jwtDecode } from "jwt-decode";
import { OAuth2Client } from 'google-auth-library';
import util from 'util';

const router = express.Router();

router.use(cookieParser());

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
});

router.post("/", (req, res) => {
    console.log("userlanding");

    //Handling JWT token response
    console.log(req.body);

    console.log(typeof token);
    res.render("userLanding");
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


export { router };