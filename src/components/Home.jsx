import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = localStorage.getItem("blogs");
    setBlogs(JSON.parse(blogs));
  }, []);

  // Handle Delete
  const handleDelete = (idOut) => {
    const _blogs = blogs.filter((blog, idIn) => {
      if (idIn !== idOut) {
        return blog;
      }
    });
    console.log(_blogs);
    setBlogs(_blogs);
    localStorage.setItem("blogs", JSON.stringify(_blogs));
  };

  // Handle Edit
  const handleEdit = (id) => {
    localStorage.setItem("editId", id);
    navigate("/edit");
  };

  return (
    <>
      <br />
      <Button variant="contained" onClick={() => navigate("/add")}>
        Add
      </Button>
      <br />
      {blogs && blogs.length > 0
        ? blogs.map((blog, id) => {
            return (
              <div key={id}>
                <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}>
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
                    <Button
                      variant="outlined"
                      color="success"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : "Data not found"}
    </>
  );
};

export default Home;
