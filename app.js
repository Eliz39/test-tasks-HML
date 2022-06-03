// server-side

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.get("api", () => {
    console.log("hello")
})
app.post("/subscribed", (req, res) => {
    const { email, js} = req.body;
    console.log(req.body);

    const data = [
        {
            status: "success",
            email: "E-mail adress added."
        }
    ]

    const dataPost = JSON.stringify(data);

    const options = {
        url: "https://email-api.dev.hml.cz/",
        method: "POST",
        body: dataPost
    }

    if(email){
        request(options, (err, response, body) => {
            if(err) {
                res.json({error: err})
            } else {
                if(js) {
                    res.sendStatus(200);
                } else {
                    res.redirect("/success.html");
                }
            }
        })
    } else {
        res.status(404).send({message: "failed"})
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server started"));