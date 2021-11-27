import React from 'react';
import {connect} from 'react-redux';
import Create from './create';
import {addProductThunk} from '../../redux/main/main.actions';

const MainContainer = props => {
    return <Create {...props} />
}

const stateToProps = state => ({
    productList: state.Main.productList
});

const dispatchToProps = {addProductThunk};

export default connect(stateToProps, dispatchToProps)(MainContainer);