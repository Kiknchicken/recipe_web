import express from 'express';
const router = express.Router();

router.get("/users", (req, res) => {
    console.log("userlanding");
});

router.post("/users", (req, res) => {
    console.log("userlanding");
});

router.put("/users", (req, res) => {
    console.log("userlanding");
});

router.delete("/users", (req, res) => {
    console.log("userlanding");
});


export { router };