import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MemberDetails = () => {
  return (
    <Card sx={{ maxWidth: 275, maxHeight: 50, marginTop: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> 
        <img height={30} src="/favicon.ico"/>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MemberDetails;
