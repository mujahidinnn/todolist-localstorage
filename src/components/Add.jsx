// import React, { useState } from "react";
// import { TextField, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Add = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   const handleDescChange = (e) => {
//     setDesc(e.target.value);
//   };

//   const handleSubmit = () => {
//     // console.log({ title, desc });
//     //Get Time
//     let tanggallengkap = new String();
//     let jamlengkap = new String();
//     let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
//     namahari = namahari.split(" ");
//     let namabulan =
//       "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
//     namabulan = namabulan.split(" ");
//     let tgl = new Date();
//     let hari = tgl.getDay();
//     let tanggal = tgl.getDate();
//     let bulan = tgl.getMonth();
//     let tahun = tgl.getFullYear();
//     let jam = tgl.getHours();
//     let menit = tgl.getMinutes();
//     tanggallengkap = `${namahari[hari]}, ${tanggal} ${namabulan[bulan]} ${tahun}`;
//     jamlengkap = `${jam}:${menit}`;
//     //   Get Time

//     const _blogs =
//       localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
//         ? JSON.parse(localStorage.getItem("blogs"))
//         : [];
//     localStorage.setItem(
//       "blogs",
//       JSON.stringify([..._blogs, { tanggallengkap, jamlengkap, title, desc }])
//     );
//     navigate("/");
//   };

//   return (
//     <div>
//       <Typography>Add Blog</Typography>
//       <TextField
//         value={title}
//         onChange={handleTitleChange}
//         label="Title"
//         variant="standard"
//         type="text"
//       />
//       <br />
//       <TextField
//         value={desc}
//         onChange={handleDescChange}
//         label="Description"
//         variant="standard"
//         type="text"
//       />
//       <br />
//       <br />
//       <Button onClick={handleSubmit} variant="contained">
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default Add;
