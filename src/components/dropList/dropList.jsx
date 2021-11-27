import React from 'react';
import { makeStyles } from '@mui/styles';
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {ALPHABET, COUNT} from '../../const/sorts';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "20px"
    },
    dropList: {
        "width": "200px"
    }
}))

const DropList = props => {

    const styles = useStyles();

    const handleChange = (e) => {
        let value = e.target.value;

        props.setSortType(value);
    }

    return (
        <div className={styles.root}>
            <FormControl className={styles.dropList} >
                <InputLabel>Sort</InputLabel>
                    <Select
                        value={props.sortType}
                        label="Sort"
                        onChange={handleChange}
                    >
                    <MenuItem value={ALPHABET}>Alphabet</MenuItem>
                    <MenuItem value={COUNT}>Count</MenuItem>
                </Select>
        </FormControl>
        </div>
    )
}

export default DropList;