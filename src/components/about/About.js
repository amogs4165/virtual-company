import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import Cards from "../cards/Cards.js";

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, Logout, User } from "../modals/Auth.js";

const About = () => {

     return (
    <Container maxWidth="xl">
      <Box
        component="img"
        alignItems="center"
        justifyContent="center"
        sx={{
          display: { xs: "none", lg: "block" },
          marginTop: 1,
          height: "100%",
          width: "100%",
          maxHeight: { md: 500 },
          maxWidth: { md: "100%" },
        }}
        alt="The house from the offer."
        src="./images/bg.jpg"
      />
      <Grid container>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          marginTop={3}
          item
          xs={12}
          md={4}
        >
          <Cards
            src="./images/aboutImage1.jpg"
            title="What is virtual company"
            content="loreim ipsum is a company for dummy texts for developers"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          marginTop={3}
          item
          xs={12}
          md={4}
        >
          <Cards
            src="./images/aboutImage2.jpg"
            title="What we are doing"
            content="loreim ipsum is a company for dummy texts for developers"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          marginTop={3}
          item
          xs={12}
          md={4}
        >
          <Cards
            src="./images/aboutImage3.jpg"
            title="What you can do"
            content="loreim ipsum is a company for dummy texts for developers"
          />
        </Grid>
      </Grid>
            
      <LoginButton/>
     <Logout/>
     <User/>
    
    </Container>
  );
};

export default About;
