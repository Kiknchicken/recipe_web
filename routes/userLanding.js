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

router.post("/", (req, res, credential) => {
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "630460929969-47is0aidbr8r9jitmhd12v3m6000875b.apps.googleusercontent.com",
        });

        const payload = ticket.getPayload();
        const userid = payload['sub'];
    }
    console.log("userlanding");

    //Handling JWT token response
    const client  = new OAuth2Client();

    verify().catch(console.error);
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