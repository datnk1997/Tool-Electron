var dotenv = require("dotenv").config(),
  express = require("express"),
  pg = require("pg"),
  cors = require("cors"),
  app = express();
const bodyParser = require('body-parser') // turns response into usable format


//Allowed cors in localhost
app.use(cors());

//Database Config .env
const config = {
  user: '',
  database: '',
  password: '',
  port: 0
};

//Documentation for node-postgres: https://node-postgres.com/
app.use(bodyParser.json())
app.get("/database.json", (req, res, next) => {
  const pool = new pg.Pool(config);
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
    }
    client.query("SELECT * FROM users", function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    });
  });
});
app.post("/database", (req, res) => {
  console.log(req.body)
  const { databaseName, port, password, userName } = req.body;
  config.user = userName
  config.database = databaseName
  config.password = password
  config.port = port
  const pool = new pg.Pool(config);
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
      res.status(400).send("sai thong tin ket noi");
    }else {
      client.query("SELECT * FROM users", function(err, result) {
        done();
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      });
    }
  });
});

app.post("/testconnect", (req, res) => {
  const { databaseName, port, password, userName } = req.body;
  config.user = userName
  config.database = databaseName
  config.password = password
  config.port = port
  const pool = new pg.Pool(config);
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
      res.status(400).send("sai thong tin ket noi");
    }else {
      client.query('SELECT NOW()', function(err, result) {
        done();
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send("Connect Success");
      });
    }
  });
});

//Server
app.listen(8080, function() {
  console.log("API listening on http://localhost:8080/database");
});
