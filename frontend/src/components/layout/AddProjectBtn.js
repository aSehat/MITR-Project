import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(6),
    right: theme.spacing(3),
  }
}));

const AddProjectBtn = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Fab 
        href='#'
        color="primary" aria-label="add" className={'modal-trigger ' + classes.margin + ' ' + classes.fab }  
        onClick={props.open}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddProjectBtn;
