import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={props.src}
            alt="What is virtual company"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
            {props.company && (
              <Typography>
                <h4>Company:</h4>
                <h4>Founder:</h4>
                <h4>Employees:</h4>
                <h4>Rating:</h4>
                <h4>Starting at:</h4>
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
