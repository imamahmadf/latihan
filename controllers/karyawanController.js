const { db } = require("../database");

module.exports = {
  getData: (req, res) => {
    let scriptQuery = "select * from karyawan;";
    if (req.query.nama) {
      let scriptQuery = `select * from karyawan where nama= ${db.escape(
        req.query.nama
      )};`;
    }

    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  addData: (req, res) => {
    const { nama, usia, email, berat, kota, tahun, posisi } = req.body;
    let insertQuery = `insert into karyawan values (null,${db.escape(
      nama
    )}, ${fb.escape(usia)}, ${db.escape(email)}, ${db.escape(
      berat
    )}, ${db.escape(kota)}, ${db.escape(tahun)}, ${db.escape(posisi)}
    )`;
    db.query(insertQuery, (err, result) => {
      if (err) res.status(500).send(err);

      db.query(
        `select * from karyawan where nama = ${db.escape(nama)}`,
        (err2, result2) => {
          if (err2) res.status(500).send(err2);
          res
            .status(200)
            .send({ message: "penambahan berhasil", data: result2 });
        }
      );
    });
  },

  editData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }
    let updateQuery = `UPDATE karyawan set ${dataUpdate} where idkaryawan = ${req.params.id}`;

    db.query(updateQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  deleteData: (req, res) => {
    let deleteQuery = `DELETE from karyawan where idkaryawan = ${db.escape(
      req.params.idkaryawan
    )}`;

    db.query(deleteQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
};
