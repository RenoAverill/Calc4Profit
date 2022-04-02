import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {auth} from '../Backend/Config/FirebaseConfig.js';

import addUsersCall from '../Backend/Services/userService';
import {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const theme = createTheme();


//TODO: REFACTOR ALL CODE HERE TO SERVICE LAYER (AUTH SERVICE )

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

// TODO : auth.currentUser will give you credentials to know who is signed in, you can play with it here
//prevents error from async changes in auth states
  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

//register function
  const register = async (data) =>{
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
          data.firstName,
          data.lastName
        );

        console.log(user);
      } catch (error) {
      console.log(error )
        alert(error.message)
        console.log(error.message);
      }
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newUser = {
          email: data.get('email')?data.get('email'):"",
          password: data.get('password')?data.get('password'):"",
          firstName: data.get('firstName')?data.get('firstName'):"",
          lastName: data.get('lastName')?data.get('lastName'):"",
    }
    //register on auth AND add to database
    addUsersCall(newUser);
    register(newUser);
  };


//logout conditional function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>



        //UGLY STATE MANAGEMENT
        {
        auth.currentUser?<button onClick ={logout}>Sign out</button>:""
        }
        <h4>User Logged In: </h4>
        <h1>{auth.currentUser?auth.currentUser.email:""}</h1>

      </Container>
    </ThemeProvider>
  );
}
