import React from 'react';
import useStyles from './main.styles';
import { Grid, Container } from '@mui/material';
import ProductItem from '../../components/productItem/productItem';
import AddButton from '../../components/addButton/addButton';
import DropList from '../../components/dropList/dropList';
import sort from '../../func/sort';

const Main = props => {

    const styles = useStyles();

    let sortedList = sort(props.productList, props.sortType);

    const products = sortedList.map(e => {
        return (
            <Grid key={e._id} xs="3" item>
                <ProductItem {...e} />
            </Grid>
        )
    });

    return (
        <Container>
            <DropList 
                setSortType={props.setSortType}
                sortType={props.sortType}
                />
            <Grid spacing={3} container>
                {products}
            </Grid>
            <AddButton />
        </Container>
    )
}

export default Main;