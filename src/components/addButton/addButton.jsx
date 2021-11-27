import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        position: "absolute",
        bottom: 70,
        right: 100
    }
}))

const AddButton = props => {

    const styles = useStyles();

    return (
        <NavLink className={styles.root} to="/create">
            <Button variant="contained">
                Add product
            </Button>
        </NavLink>
    )
}

export default AddButton;