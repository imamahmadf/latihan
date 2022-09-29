const express = require("express");
const { karyawanController } = require("../controllers");
const routers = express.Router();

routers.get("/get", karyawanController.getData);
routers.post("/add-karyawan", karyawanController.addData);
routers.patch("/edit-karyawan/:id", karyawanController.editData);
routers.delete("/delete-karyawan/:idkaryawan", karyawanController.deleteData);

module.exports = routers;
