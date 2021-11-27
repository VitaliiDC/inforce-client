import React from 'react';
import {Card, CardMedia, CardContent, Typography} from "@mui/material";
import useStyles from './productItem.styles';
import {NavLink} from 'react-router-dom';

const ProductItem = props => {

    const styles = useStyles();

    return (
        <NavLink to={`/${props._id}`}>
            <Card className={styles.card}>
                <CardMedia 
                    component="img"
                    height="200"
                    image={props.image}
                />
                <CardContent>
                    <Typography variant="h4">
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </NavLink>
    )
}

export default ProductItem;