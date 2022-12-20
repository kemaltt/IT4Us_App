import React from "react";
import Navbar from "../components/navbar/Navbar";
import Copyright from "../components/Copyright";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const theme = createTheme();
export default function Home({ isLogin, setIsLogin }) {
  const [message, setMessage] = useState("");
  const { userData, setIsLoading } = useContext(UserContext);
  const navigate = useNavigate();
  // const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const userEmail = userData[0].email;
  const userPassword = userData[0].password;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (inputLogin) => {
    if (
      userEmail === inputLogin.email &&
      userPassword === inputLogin.password
    ) {
      setIsLogin(true);
      setMessage(<p style={{ color: "yellowgreen" }}>Login successful</p>);
      setIsLoading(true);
      setTimeout(() => {
        navigate("/home");
        setTimeout(() => {
          setIsLoading(false);
        }, 1300);
      }, 1000);
    } else if (userEmail !== inputLogin.email) {
      setMessage(
        <p style={{ color: "red" }}>
          Your email not registered or incorrect, Please try again.
        </p>
      );
    } else if (userPassword !== inputLogin.password) {
      setMessage(
        <p style={{ color: "red" }}>
          Password false!,please click Forgot Password
        </p>
      );
    }
  };
  return (
    <>
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setIsLoading={setIsLoading}
      />

      <div className="main">
        <img
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
          alt=""
        />

        <div className="login">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "1rem",
                  color: "white",
                }}
              >
                <Typography
                  sx={{ marginBottom: 2 }}
                  component="h1"
                  variant="h5"
                >
                  Login
                </Typography>
                <Box
                  component="form"
                  // onSubmit={handleSubmit}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    color="warning"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i,
                      },
                    })}
                  />
                  {errors.email && <p>Please enter a valid email address</p>}

                  <TextField
                    margin="normal"
                    marginbottom="8px"
                    required
                    fullWidth
                    name="password"
                    label="PASSWORD"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    color="warning"
                    {...register("password", {
                      required: true,
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                      },
                    })}
                  />
                  {errors.password && <p>Please enter a valid password</p>}
                  {message}
                  <Typography
                    sx={{ textAlign: "center", pt: 2, fontSize: "12px" }}
                    component="h1"
                  >
                    <Link
                      to={"/forgotpassword"}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      Forgot Password?
                    </Link>
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="warning"
                    sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
                  >
                    Login
                  </Button>
                  <Typography
                    sx={{
                      textAlign: "center",
                      borderTop: "1px solid white",
                      pt: 2,
                      fontSize: "12px",
                    }}
                    component="h1"
                  >
                    New Account
                  </Typography>

                  <Button
                    onClick={() => navigate("/register")}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
                  >
                    Sing Up
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>

      <Copyright className="footer" />
    </>
  );
}
