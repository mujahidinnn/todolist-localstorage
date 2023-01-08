import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [getdata, setGetdata] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    // setTitle(localStorage.getItem("blogs"));
  }, []);

  const handleEdit = () => {
    // console.log({ title, desc, index: localStorage.getItem("editId") });

    //Get Time
    var tanggallengkap = new String();
    var jamlengkap = new String();
    var namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
    namahari = namahari.split(" ");
    var namabulan =
      "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
    namabulan = namabulan.split(" ");
    var tgl = new Date();
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();
    var jam = tgl.getHours();
    var menit = tgl.getMinutes();
    tanggallengkap =
      namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    jamlengkap = jam + ":" + menit;
    //   Get Time

    const blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : [];

    const _blogs = blogs.map((blog, idIn) => {
      if (idIn == localStorage.getItem("editId")) {
        return { title, desc, tanggallengkap, jamlengkap };
      } else {
        return blog;
      }
    });
    // console.log(_blogs);
    localStorage.setItem("blogs", JSON.stringify(_blogs));
    navigate("/");
  };
  return (
    <div>
      <Typography>Edit Blog</Typography>
      <TextField
        value={title}
        onChange={(e) => handleTitleChange(e)}
        label="Title"
        variant="standard"
      />
      <br />
      <TextField
        value={desc}
        onChange={(e) => handleDescChange(e)}
        label="Description"
        variant="standard"
      />
      <br />
      <Button variant="contained" onClick={handleEdit}>
        Submit
      </Button>
    </div>
  );
};

export default Edit;
