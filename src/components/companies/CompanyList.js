import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import Cards from "../cards/Cards";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import "./CompanyList.css";

const CompanyList = () => {
  return (
    <Container maxWidth="xl">
      <div className="textCenter">
        <h1>Companies</h1>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SortIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search companies"
            inputProps={{ "aria-label": "search companies" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          
        </Paper>
      </Box>
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
            src="./images/aboutImage2.jpg"
            company="infote"
            
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
            company="infote"
            
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
            company="infote"
            
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyList;
