const express = require("express");
const cors = require("cors");
const connexion = require("./db/database");
const app = express();
const port = 3008;
const version = "v1";
const router = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const options = require("./swagger.json");
const specs = swaggerJsdoc(options);
const Blague = require("./model/blague");
const { SELECT } = require("sequelize/lib/query-types");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/epreuve/${version}`, router);


connexion.sync().then(() => {
    console.log("DBconnect est synchronisé");
    app.listen(port, () => {
        console.log("Example app listening on port ${port}");
    });
});