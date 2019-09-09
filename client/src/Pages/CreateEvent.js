import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import "./css/CreateEvent.css";
import EventHolder from "../components/EventHolder/EventHolder";
import API from "../utils/API";

const styles = theme => ({
  paper: {
    // margin: "5%",
    // textAlign: "center",
    // height: "400px",
    // width: "500px",
    width: "100%",
    backgroundColor: "rgba(168, 166, 166, 0.65)"
  },
  textField: {
    color: "white"
  }
});

class CreateEvent extends React.Component {
  state = {
    name: "",
    location: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitEvent = () => {
    API.postEvent(this.state)
      .then(dbData => {
        const newArr = this.props.Events;
        newArr.push(dbData.data);
        this.props.updateGlobalState("Events", newArr);
        this.setState({
          name: "",
          location: "",
          description: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes, Events, updateGlobalState } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} color="white">
            <Box m={2}>
              <Paper className={classes.paper}>
                <Box p={2}>
                  <h1>Create Event {this.props.User.displayName}</h1>

                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={!this.props.User && true}
                  />
                  <TextField
                    fullWidth
                    id="outlined-location"
                    label="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={!this.props.User && true}
                  />
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Event Details"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    multiline
                    rows="6"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={!this.props.User && true}
                  />
                  <Button
                    fullWidth
                    color="primary"
                    className={classes.button}
                    disabled={!this.props.User && true}
                    onClick={this.submitEvent}
                  >
                    Create Event
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box m={2}>
              <Paper className={classes.paper}>
                <Box p={2}>
                  <EventHolder
                    Events={Events}
                    updateGlobalState={updateGlobalState}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CreateEvent);
