import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import path from '../const/path';

const {
    pathToMain,
    pathToProduct,
    pathToCreate
} = path;

const Main = lazy(() => import("../pages/main/main.container"));
const Product = lazy(() => import("../pages/product/product.container"));
const Create = lazy(() => import("../pages/create/create.container"));


const RoutesComponent = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route component={Create} path={pathToCreate} />
                <Route component={Product} path={pathToProduct} />
                <Route component={Main}  path={pathToMain} />
            </Switch>
        </Suspense>
    )
}

export default RoutesComponent;

