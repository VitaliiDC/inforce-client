import React from 'react';
import { Redirect } from 'react-router';
import {Container, Card, CardHeader, CardMedia, Typography, CardActions, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Product = props => {

    const product = props.productList.find(e => e._id === props.match.params.id);

    if(!product) return <Redirect to="/" />

    return (
        <Container>
            <Card>
                <CardHeader title={product.name} />
                <CardMedia 
                    image={product.image}
                    component="img"
                    height="200" />
                <CardActions>
                    <Button>
                        Edit
                    </Button>
                    <NavLink to="/">
                        <Button>
                            Cancel
                        </Button>
                    </NavLink>
                    <Button onClick={() => props.removeProductThunk(product._id)} color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Product