import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: theme.mixins.gutters({
    background:'transparent',
    paddingTop: 16,
    paddingBottom: 16,
    color:'white',
    marginLeft: '7%',
    width:'80%',
    textAlign:'left',
    marginTop: theme.spacing.unit * 3,
  }),
  p:{
      color:'white',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});


class PaperSheet extends Component{
    render(){
        const { classes } = this.props;
       if(this.props.list.length%2===0){
        return (
          <div>
            <Paper className={classes.root} elevation={4}>
              <Typography variant="headline" component="h3" className={classes.p}>
                This is a sheet of paper.
              </Typography>
            </Paper>
          </div>
        )
       }
       else{
        return (
          <div>
             <Paper className={classes.root} elevation={4}>
             <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
          <i className="material-icons" >check_box_outline_blank</i>
          </Grid>
          <Grid item>
          <div className={classes.root1}>
          <FormControl fullWidth >
          <TextField id="input-with-icon-grid" label="With a grid" />
          </FormControl>
          </div>
          </Grid>
        </Grid>
      </div>
            </Paper>
          </div>
          
        )
       }
    }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);