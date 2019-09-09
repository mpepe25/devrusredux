import React from "react";
// import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: "center"
  },
  textField: {
    color: "red"
  }
});

class Comments extends React.Component {
  state = {
    someItem1: "",
    initials: "",
    comments: ""
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDelete = () => {
    this.setState({
      deleteClicked: [this.state.deleteClicked],
      comments: this.state.delete
    });
    alert("deleting");
  };

  handlePost = () => {
    this.setState({
      postClick: [this.state.postClick],
      comments: this.state.post
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <h1>comments</h1>

              <TextField
                fullWidth
                id="standard-name"
                label="Name Label"
                name="someItem1"
                className={classes.textField}
                value={this.state.someItem1}
                onChange={this.handleChange}
                margin="normal"
              />

              <TextField
                fullWidth
                id="standard-name"
                label="initials"
                name="initials"
                className={classes.textField}
                value={this.state.initials}
                onChange={this.handleChange}
                margin="normal"
              />
              <button onClick={this.handlePost} color="">
                Post
              </button>

              <button onClick={this.handleDelete} color="primary">
                Delete
              </button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
