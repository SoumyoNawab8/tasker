import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles =theme=> ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontFamily:' Kaushan Script, cursive',
    fontSize: '2.3125rem',
    textAlign:'center',
  },
  icon: {
    boxShadow: '1px 1px 7px cornflowerblue',
    borderRadius: '50px',
    color:'cornflowerblue',
    userSelect:'none',
  },
});

class ButtonAppBar extends Component{
render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="title" color="inherit" className={classes.flex}>
            tasker
          </Typography>
          <i className="material-icons"  id="add" onMouseUp={this.props.onMouse} onMouseDown={this.props.onMouse}>add</i>
        </Toolbar>
      </AppBar>
    </div>
  )
};
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);