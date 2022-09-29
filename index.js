const express = require("express");
const cors = require("cors");

const { response } = require("express");
const PORT = 3300;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h4>mysql express</h4>");
});

const { karyawanRouters } = require("./routers");

app.use("/karyawan", karyawanRouters);

app.listen(PORT, () => console.log("api running:", PORT));
