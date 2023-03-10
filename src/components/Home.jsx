// Component
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

// Icon
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import React, { useEffect, useState } from "react";

const Home = () => {
  // Add
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const handleOpenModalAdd = () => setOpenModalAdd(true);
  const handleCloseModalAdd = () => setOpenModalAdd(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    //Get Time
    let tanggallengkap = new String();
    let jamlengkap = new String();
    let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
    namahari = namahari.split(" ");
    let namabulan =
      "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
    namabulan = namabulan.split(" ");
    let tgl = new Date();
    let hari = tgl.getDay();
    let tanggal = tgl.getDate();
    let bulan = tgl.getMonth();
    let tahun = tgl.getFullYear();
    let jam = tgl.getHours();
    let menit = tgl.getMinutes();
    tanggallengkap = `${namahari[hari]}, ${tanggal} ${namabulan[bulan]} ${tahun}`;
    jamlengkap = `${jam}:${menit}`;

    const _todolist =
      localStorage.getItem("todolist") && localStorage.getItem("todolist").length > 0
        ? JSON.parse(localStorage.getItem("todolist"))
        : [];
    localStorage.setItem(
      "todolist",
      JSON.stringify([..._todolist, { tanggallengkap, jamlengkap, title, desc }])
    );
    setTitle("");
    setDesc("");
  };

  // Get
  const [todolist, setTodolist] = useState([]);

  const handleGet = () => {
    const todolist = localStorage.getItem("todolist");
    setTodolist(JSON.parse(todolist));
  };
  useEffect(() => {
    handleGet();
  }, []);

  //Delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = () => setOpenModalDelete(true);
  const handleCloseModalDelete = () => setOpenModalDelete(false);

  const handleDelete = (idOut) => {
    const _todolist = todolist.filter((blog, idIn) => {
      if (idIn !== idOut) {
        return blog;
      }
    });
    setTodolist(_todolist);
    localStorage.setItem("todolist", JSON.stringify(_todolist));
  };

  // Edit
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const handleOpenModalEdit = () => setOpenModalEdit(true);
  const handleCloseModalEdit = () => setOpenModalEdit(false);

  const handleSelectId = (id) => {
    localStorage.setItem("editId", id);
    console.log(id);
  };

  const handleEdit = (id) => {
    //Get Time
    let tanggallengkap = new String();
    let jamlengkap = new String();
    let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
    namahari = namahari.split(" ");
    let namabulan =
      "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
    namabulan = namabulan.split(" ");
    let tgl = new Date();
    let hari = tgl.getDay();
    let tanggal = tgl.getDate();
    let bulan = tgl.getMonth();
    let tahun = tgl.getFullYear();
    let jam = tgl.getHours();
    let menit = tgl.getMinutes();
    tanggallengkap = `${namahari[hari]}, ${tanggal} ${namabulan[bulan]} ${tahun}`;
    jamlengkap = `${jam}:${menit}`;

    const theId =
      localStorage.getItem("editId") &&
      localStorage.getItem("editId").length > 0
        ? JSON.parse(localStorage.getItem("editId"))
        : [];
    console.log("ini the Id " + theId);

    const _todolist = todolist.map((blog, idIn) => {
      if (idIn == localStorage.getItem("editId")) {
        return { title, desc, tanggallengkap, jamlengkap };
      } else {
        return blog;
      }
    });
    // console.log(_todolist);

    localStorage.setItem("todolist", JSON.stringify(_todolist));

    setTitle("");
    setDesc("");
  };

  return (
    <>
      <br />
      {/* Modal Add */}
      <div>
        <Button
          onClick={handleOpenModalAdd}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add your todo
        </Button>
        <Modal
          open={openModalAdd}
          onClose={handleCloseModalAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: 300,
              minWidth: 280,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Add Todolist
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                right: "4%",
                top: "4%",
                color: "#777777",
                cursor: "pointer",
              }}
              onClick={handleCloseModalAdd}
            >
              X
            </Typography>
            <hr color="#ccc" />
            <br />
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="standard"
              type="text"
              sx={{ width: "100%" }}
            />
            <br />
            <TextField
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              label="Description"
              variant="standard"
              type="text"
              sx={{ width: "100%" }}
            />
            <br />
            <br />
            <Button
              onClick={() => {
                handleAdd(), handleCloseModalAdd(), handleGet();
              }}
              variant="contained"
              sx={{ float: "right" }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
      {/* Modal Add */}

      <br />

      {/* Card Blog */}
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 450px))",
          placeItems:"center"
        }}
      >
        {todolist && todolist.length > 0
          ? todolist.map((blog, id) => {
              return (
                <div key={id}>
                  <Card sx={{ minWidth: 275, maxWidth: 450, margin: 2 }}>
                    <CardContent>
                      <CardContent
                        sx={{
                          display: "flex",
                          margin: 0,
                          padding: 0,
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {blog?.tanggallengkap}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {blog?.jamlengkap}
                        </Typography>
                      </CardContent>
                      <hr />
                      <Typography
                        variant="h5"
                        component="div"
                        noWrap
                        sx={{ textTransform: "capitalize" }}
                      >
                        {blog?.title}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5, textTransform: "capitalize" }}
                        color="text.secondary"
                      >
                        {blog?.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* Modal Edit */}
                      <Button
                        variant="outlined"
                        color="success"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          handleOpenModalEdit(),
                            handleSelectId(id),
                            setTitle(title),
                            setDesc(desc);
                        }}
                      >
                        Edit
                      </Button>
                      <Modal
                        open={openModalEdit}
                        onClose={handleCloseModalEdit}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: 300,
                            minWidth: 280,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: "10px",
                          }}
                        >
                          <Typography
                            id="modal-modal-title"
                            variant="h5"
                            component="h2"
                            color="green"
                          >
                            Edit Todolist
                          </Typography>
                          <hr color="#ccc" />
                          <br />
                          <TextField
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label="Title"
                            variant="standard"
                            type="text"
                            sx={{ width: "100%" }}
                          />
                          <br />
                          <TextField
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            label="Description"
                            variant="standard"
                            type="text"
                            sx={{ width: "100%" }}
                          />
                          <br />
                          <br />
                          <CardActions
                            sx={{
                              display: "flex",
                              gap: 6,
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => {
                                handleCloseModalEdit(), handleGet();
                              }}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => {
                                handleEdit(id),
                                  handleCloseModalEdit(),
                                  handleGet();
                              }}
                            >
                              Edit
                            </Button>
                          </CardActions>
                        </Box>
                      </Modal>

                      {/*  */}

                      {/* Modal Edit */}
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={handleOpenModalDelete}
                      >
                        Delete
                      </Button>
                      {/* Modal Delete */}
                      <Modal
                        open={openModalDelete}
                        onClose={handleCloseModalDelete}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: 300,
                            minWidth: 280,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: "10px",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            id="modal-modal-title"
                            variant="h5"
                            component="h2"
                            color="red"
                          >
                            Delete Todolist
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Are you sure delete this todolist?
                          </Typography>
                          <br />
                          <CardActions
                            sx={{
                              display: "flex",
                              gap: 6,
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="success"
                              onClick={() => {
                                handleCloseModalDelete(), handleGet();
                              }}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => {
                                handleDelete(id),
                                  handleCloseModalDelete(),
                                  handleGet();
                              }}
                            >
                              Delete
                            </Button>
                          </CardActions>
                        </Box>
                      </Modal>
                      {/* Modal Delete */}
                      {/* </Button> */}
                    </CardActions>
                  </Card>
                </div>
              );
            })
          : "Data not found"}
      </div>
      {/* jadjbjdabjdbjabj */}
    </>
  );
};

export default Home;
