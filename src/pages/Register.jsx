import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavPages from "../components/navbar/NavPages";
import { useForm } from "react-hook-form";
import UsernameGenerator from "username-generator";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
// import axios from "axios";

const theme = createTheme();

export default function Register() {
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (inputRegister) => {
    const randomUserName = UsernameGenerator.generateUsername("_", 6);
    console.log(randomUserName);
    console.log(inputRegister);

    // fetch("http://dart-dev.fria.io/api/signup", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "'Content-Type': 'application/json' ",
    //   },
    //   body: {
    //     userName: null,
    //     email: "test9@email.com",
    //     password: "123456798",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //   });

    // axios
    //   .post("http://dart-dev.fria.io/api/signup", {
    //     mode: "no-cors",
    //     userName: null,
    //     email: "test9@email.com",
    //     password: "123456798",
    //   })
    //   .then((response) => {
    //     console.log(response.status);
    //     console.log(response.data.token);
    //   });
    // axios
    //   .post(`http://localhost:8080/api/signup`, {
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },

    //     userName: null,
    //     email: "test2@email.com",
    //     password: "12345678",
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .then((err) => {
    //     console.log(err);
    //   });

    if (userData[0].userName === inputRegister.userName) {
      setErrorUserName(<p>This name already exist.Please try another name.</p>);
    } else if (inputRegister.userName === "") {
      inputRegister.userName = randomUserName;
      setErrorUserName("");
      if (inputRegister.password !== inputRegister.passwordConfirm) {
        setErrorPasswordConfirm(<p>Password not matched</p>);
      } else if (userData[0].email === inputRegister.email) {
        setErrorEmail(
          <p>
            This email already exist.Please {<Link to={"/"}>login</Link>} try
            another name.
          </p>
        );
      } else {
        setUserData([inputRegister]);
        setTimeout(() => {
          navigate("/");
        }, 300);
      }
    } else {
      if (inputRegister.password !== inputRegister.passwordConfirm) {
        setErrorPasswordConfirm(<p>Password not matched</p>);
      } else if (userData[0].email === inputRegister.email) {
        setErrorEmail(
          <p>
            This email already exist.Please
            {<Link to={"/"}>login</Link>}
            try another one.
          </p>
        );
      } else {
        setUserData([inputRegister]);
        setTimeout(() => {
          navigate("/");
        }, 300);
      }
    }
  };

  return (
    <div className="register">
      <NavPages />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "white" }} component="h1" variant="h5">
              Create new Account
            </Typography>

            <Grid item sx={{ m: 1, color: "white" }}>
              Already Registered?
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "3px",
                }}
                to="/"
                variant="body2"
              >
                Login
              </Link>
            </Grid>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {errors.userName && <p> Please enter a valid username </p>}
                  {errorUserName}
                  <TextField
                    autoComplete="given-name"
                    name="userName"
                    required
                    fullWidth
                    id="username"
                    label="USERNAME"
                    autoFocus
                    color="warning"
                    {...register("userName", {
                      required: false,
                      minLength: 4,
                      maxLength: 15,
                      pattern: {
                        value: /^(?=)(?=).{4,15}$/,
                      },
                    })}
                  />
                </Grid>

                <Grid item xs={12}>
                  {errors.email && <p>Please enter a valid email address</p>}
                  {errorEmail}
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
                </Grid>
                {errors.userName && (
                  <div className="error-username">
                    <p>??? Username can be 4-15 characters lang</p>
                    <p>??? Username can only start with a letter (a-z)</p>
                    <p>??? Username can contain numbers 0-9</p>
                    <p>
                      ??? Username can only use the special character
                      '_'(underline) and cannot use more than one
                    </p>
                  </div>
                )}
                {errors.password && (
                  <div className="error-password">
                    <p>Passwords must contain one of each </p>
                    <p>??? Uppercase letters: (A-Z)</p>
                    <p>??? Lowercase letters: (a-z)</p>
                    <p>??? Numbers: 0-9 </p>
                    <p>??? Symbols ~`!@#$%^&*()_-+= </p>
                    <p>Passwords can be 8-15 characters long</p>
                  </div>
                )}

                <Grid item xs={12}>
                  {errors.password && <p>Please enter a valid password</p>}

                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="PASSWORD"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    color="warning"
                    {...register("password", {
                      required: true,
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errorPasswordConfirm}
                  {errors.passwordConfirm && (
                    <p>Please enter a valid password</p>
                  )}
                  <TextField
                    required
                    fullWidth
                    name="passwordConfirm"
                    label="CONFIRM PASSWORD"
                    type="password"
                    id="passwordconfirm"
                    autoComplete="new-password"
                    color="warning"
                    {...register("passwordConfirm", {
                      required: true,
                    })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                SEND
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

// const isEmail = (email) =>
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

// const isPassword = (password) =>
// /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,16}$/i.test(password)

// const handleSubmit = (event) => {
//   event.preventDefault()

//   const data = new FormData(event.currentTarget)
//   const userName = data.get('username')
//   const email = data.get('email')
//   const password = data.get('password')
//   const passwordConfirm = data.get('passwordconfirm')

//   //     const userInfo = userData.filter((el) => {
//   //       return el.email === email
//   //     })
//   // const userEmail=userInfo[0].email
//   // if (userEmail === email) {
//   //   alert('there is an account with this email, please log in')
//   // } else {
//   if (password === '' || passwordConfirm === '' || email === '') {
//     alert('please fill in the blanks')
//   } else if (!isEmail(email)) {
//     setErrorEmail('Please enter a valid email address')
//     console.log(' Please enter a valid email address')
//   } else if (!isPassword(password)) {
//     setErrorPassword('Please enter a valid password')
//     console.log(' Please enter a valid password')
//   } else if (password !== passwordConfirm) {
//     setErrorPasswordConfirm('password not match')
//     console.log('Password not matched')
//   } else {
//     setUserData([
//       {
//         userName: userName,
//         email: email,
//         password: password,
//         passwordConfirm: passwordConfirm,
//         isLogin: true,
//       },
//     ])

//     setTimeout(() => {
//       navigate('/')
//     }, 300)
//   }
//   // }
// }

// console.log(userData)

// useEffect(() => {}, [])
