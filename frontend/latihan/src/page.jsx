import React from "react";
import { InputGroup, Form, Button, Table } from "react-bootstrap";
import Axios from "axios";

class Latihan extends React.Component {
  state = {
    dbKaryawan: [],
    selectedId: null,
    addnama: "",
    addusia: "",
    addemail: "",
    addberat: "",
    addkota: "",
    addtahun: "",
    addposisi: "",
  };

  addData = () => {
    Axios.get(`http://localhost:3300/karyawan/add-karyawan`, {
      nama: this.state.addnama,
      usia: this.state.addusia,
      email: this.state.addemail,
      berat: this.state.addberat,
      kota: this.state.addkota,
      tahun: this.state.addtahun,
      posisi: this.state.addposisi,
    })
      .then((res) => {
        alert("berhasi");
        this.getData();
      })
      .catch((err) => {
        alert("gagal");
        console.log(err);
      });
  };

  inputHandler = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  getData = () => {
    Axios.get(`http://localhost:3300/karyawan/get`)
      .then((res) => {
        this.setState({ dbKaryawan: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderData = () => {
    return this.state.dbKaryawan.map((item, idx) => {
      if (this.state.selectedId !== idx) {
        return (
          <tr>
            <td>{idx + 1}</td>
            <td>{item.nama}</td>
            <td>{item.usia}</td>
            <td>{item.email}</td>
            <td>{item.berat}</td>
            <td>{item.kota}</td>
            <td>{item.tahun}</td>
            <td>{item.posisi}</td>
            <td>
              <Button
                onClick={() => this.setState({ selectedId: idx })}
                variant="success"
              >
                Success
              </Button>{" "}
              <Button variant="danger">Danger</Button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newnama) => this.newnama}
                defaultValue={item.nama}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newusia) => this.newusia}
                defaultValue={item.usia}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newemail) => this.newemail}
                defaultValue={item.email}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newberat) => this.newberat}
                defaultValue={item.berat}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newkota) => this.newkota}
                defaultValue={item.kota}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newtahun) => this.newtahun}
                defaultValue={item.tahun}
              />
            </td>
            <td>
              <input
                type="text"
                name="text"
                innerRef={(newposisi) => this.newposisi}
                defaultValue={item.posisi}
              />
            </td>
            <td>
              {this.state.selectedId == null ? (
                <>
                  <Button
                    onClick={() => this.setState({ selectedId: idx })}
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button variant="primary">Delete</Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => this.setState({ selectedId: null })}
                    variant="primary"
                  >
                    no
                  </Button>
                  <Button variant="primary">yes</Button>
                </>
              )}
            </td>
          </tr>
        );
      }
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="shadow py-2 text-start px-2 bg-light">
          <h1>Frontend Tes</h1>
        </div>
        <div className="row">
          <div className="col-2">
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">Nama</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addnama"
                type="text"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">usia</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addusia"
                type="number"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addemail"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">Berat</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addberat"
                type="number"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">Kota</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addkota"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">Tahun</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addtahun"
                type="number"
              />
            </InputGroup>
            <InputGroup size="sm" className="my-4">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Posisi
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.inputHandler}
                name="addposisi"
              />
            </InputGroup>
            <Button onClick={() => this.addData(this.state)} variant="primary">
              tambah
            </Button>
          </div>
          <div className="col-10 pt-3 px-3">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Usia</th>
                  <th>EMail</th>
                  <th>Berat</th>
                  <th>Kota</th>
                  <th>Tahun</th>
                  <th>Posisi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderData()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Latihan;
