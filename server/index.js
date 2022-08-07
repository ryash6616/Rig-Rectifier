import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql";

const app = Express();
app.use(cors());
app.use(bodyParser());

console.clear();

app.get("/", (req, res) => {
  res.send(`
        <div style="color: red; margin: 0.5em;">
            I am a response
        </div>
    `);
});
app.listen(3000);
