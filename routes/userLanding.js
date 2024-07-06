import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    console.log("userlanding");
});

router.post("/", (req, res) => {
    console.log("userlanding");
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


export { router };