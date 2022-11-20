import React from "react";
import Loading from "../components/Loading";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WorkSpace from "../components/WorkSpace";
import { useState } from "react";

const theme = createTheme();

export default function Home({
  isLogin,
  isLoading,
  userData,
  setWorkSpace,
  workSpace,
  toggle,
  setToggle,
}) {
  const navigate = useNavigate();
  const userName = userData[0].userName;
  const [message, setMesaage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (inputWorkSpace) => {
    const workSpaceName = workSpace.map((el) => {
      return el.workSpaceName.toLowerCase();
    });

    if (workSpaceName.includes(inputWorkSpace.workSpaceName.toLowerCase())) {
      setMesaage(<p>This name already exist</p>);
    } else {
      setWorkSpace([...workSpace, inputWorkSpace]);
      register(" ");
      setToggle(!toggle);
    }
  };
  console.log(workSpace);
  console.log(toggle);
  return (
    <div className="home_page">
      {/* <Navbar /> */}
      <div className="nav_pages">
        <div onClick={() => navigate("/")} className="logo">
          {/* <img src="trello.png" alt="logo" /> */}
          <h4>T4US</h4>
          <h2>TODO</h2>
        </div>

        <div>
          <Avatar
            sx={{
              m: 0.7,
              bgcolor: "secondary.main",
              // fontSize: '10px',
            }}
          ></Avatar>
          <p style={{ color: "white" }}>{userName}</p>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!toggle ? (
            <div className="home">
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      padding: "1rem",
                      color: "white",
                    }}
                  >
                    <Typography
                      sx={{ marginBottom: 2 }}
                      component="h1"
                      variant="h5"
                    >
                      Welcome TODO
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "rgba(236, 222, 222, 0.637)",
                        padding: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          pt: 2,
                          fontSize: "16px",
                          color: "black",
                        }}
                        component="h1"
                      >
                        Firstly create a Workspace and a Board than start add
                        your POST-IT
                      </Typography>
                      {errors.workSpaceName && (
                        <p>Please enter a valid Workspace name</p>
                      )}
                      {message}
                      <TextField
                        margin="normal"
                        autoComplete="given-name"
                        name="workSpaceName"
                        required
                        fullWidth
                        id="workSpaceName"
                        label="WORKSPACE NAME"
                        autoFocus
                        color="warning"
                        {...register("workSpaceName", {
                          required: true,
                        })}
                      />

                      {errors.boardName && (
                        <p>Please enter a valid boardname</p>
                      )}
                      <TextField
                        margin="normal"
                        autoComplete="given-name"
                        name="boardName"
                        required
                        fullWidth
                        id="boardName"
                        label="BOARD NAME"
                        color="warning"
                        {...register("boardName", {
                          required: true,
                        })}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
                      >
                        CREATE
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </div>
          ) : (
            <WorkSpace workSpace={workSpace} setToggle={setToggle} />
          )}
        </>
      )}
    </div>
  );
}
