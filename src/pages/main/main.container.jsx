import React from 'react';
import {connect} from 'react-redux';
import Main from './main';
import { setSortType } from '../../redux/main/main.actions';

const MainContainer = props => {
    return <Main {...props} />
}

const stateToProps = state => ({
    productList: state.Main.productList,
    sortType: state.Main.sortType
});

const dispatchToProps = {setSortType};

export default connect(stateToProps, dispatchToProps)(MainContainer);