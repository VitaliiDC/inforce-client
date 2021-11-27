import React from 'react';
import {connect} from 'react-redux';
import Product from './product';
import {removeProductThunk} from '../../redux/main/main.actions';

const ProductContainer = props => {
    return <Product {...props} />
}

const stateToProps = state => ({
    productList: state.Main.productList
});

const dispatchToProps = {removeProductThunk};

export default connect(stateToProps, dispatchToProps)(ProductContainer);
