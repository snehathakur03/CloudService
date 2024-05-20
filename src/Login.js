import React from "react";
import './Login.css';
import {Box, Grid, Typography,TextField,FormControlLabel,Checkbox,Button, Link} from "@mui/material";

export default function LoginPage(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
    return(
        <>
            <Box className="mainBox">
                <Grid container className="LoginBox">
                    <Grid item md className="LeftContainer">
                        <Box>
                            <Typography variant="h2" className="LoginHeading">Sign In To SwiftServe Cloud</Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2} marginTop="2rem">
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
                    </Grid>

                    <Grid item md className="RightConatiner" sx={{display:"flex", justifyContent:"center",backgroundColor: "rgb(247 250 252) !important"}}>
                    <img alt="login" className="illustrationImg" src="https://treact.owaiskhan.me/static/media/login-illustration.39a64f784d3474ef7b31bd14ad6360c7.svg"></img>
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}