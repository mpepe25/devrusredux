import React from 'react';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});


class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;

    return (
       <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
          <Tab label="Login" component={Link} to="/login"/>
            <Tab label="Home" component={Link} to="/home"/>
            <Tab label="Create Event" component={Link} to="/create"/>
            <Tab label="Comments" component={Link} to="/comments"/>
            <Tab label={this.props.User && this.props.User.name} />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(styles)(NavTabs);