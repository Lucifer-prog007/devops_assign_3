const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    try {
        const params = new URLSearchParams();
params.append("name", req.body.name);
params.append("email", req.body.email);
params.append("age", req.body.age);

const response = await axios.post(
    "http://backend:5000/submit",
    params,
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
);
res.send(response.data);
    } catch (error) {
        res.send("Error connecting to Flask backend.");
    }
});

app.listen(3000, () => {
    console.log("Frontend running on http://localhost:3000");
});