import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = () => {
    // console.log({ title, desc });

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

    const _blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : [];
    localStorage.setItem(
      "blogs",
      JSON.stringify([..._blogs, { tanggallengkap, jamlengkap, title, desc }])
    );
    navigate("/");
  };

  return (
    <div>
      <Typography>Add Blog</Typography>
      <TextField
        value={title}
        onChange={handleTitleChange}
        label="Title"
        variant="standard"
        type="text"
      />
      <br />
      <TextField
        value={desc}
        onChange={handleDescChange}
        label="Description"
        variant="standard"
        type="text"
      />
      <br />
      <br />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </div>
  );
};

export default Add;
