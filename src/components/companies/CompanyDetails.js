import { withTheme } from "@emotion/react";
import { AlignVerticalCenter } from "@mui/icons-material";
import { Container, Grid, TextareaAutosize, TextField } from "@mui/material";
import { flexbox, maxWidth } from "@mui/system";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  return (
    <Container maxWidth="xl">
      <Grid container style={{ display: "flex", marginTop: "50px" }}>
        <Grid style={{ maxWidth: 744 }} xs={12} md={6}>
         
          <h2>Infotech</h2>
          <p>
            infotech and some dummy contents are the best for dummy lines so
            thats why dummy contents are dummy contents It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English.
          </p>
         
        </Grid>
        <Grid className="rightMainDiv" xs={12} md={6}>
          <Grid className="messageInfo">
              <h3 id="heading">Make an offer</h3>
            <Grid className="center">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={15}
                placeholder="Minimum 3 rows"
                style={{ width: 400 }}
              />
            </Grid>
            <Grid className="inputButton">
                <input id="inputField"/>
                <button id="sendButton">SEND</button>
            </Grid>
            <Grid className="center">
                <hr className="hr"/>
                <p>OR</p>
                <hr className="hr"/>
            </Grid>
            <Grid className="center">
                <button id="messageButton">Message Us</button>
            </Grid>
            <Grid className="joinTeam">
                <h3>We are looking for new team mates</h3>
                <button id="joinTeamButton">Join our team</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyDetails;
