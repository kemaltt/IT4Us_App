import React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavPages from "../components/NavPages";

const theme = createTheme();

export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (inputEmail) => {
    console.log(inputEmail);
    navigate("/createnewpass", { state: { inputEmail } });
  };
  return (
    <div className="forgot_password">
      <NavPages />
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
              margin: "4vh 0",
              color: "white",
            }}
          >
            <Typography sx={{ marginBottom: 6 }} component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              // sx={{
              //   borderRadius: '20px',
              //   backgroundColor: 'rgba(236, 222, 222, 0.637)',
              //   padding: '10px',
              // }}
            >
              {errors.email && <p>Please enter a valid email address</p>}

              <TextField
                required
                fullWidth
                id="email"
                label="EMAIL"
                name="email"
                autoComplete="email"
                color="warning"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i,
                  },
                })}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
              >
                CONTINUE
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
