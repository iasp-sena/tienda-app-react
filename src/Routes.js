import React from 'react';
import { Switch, Route} from 'react-router-dom';
import CategoriesContainer from './containers/CategoriesContainer';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/categories" component={CategoriesContainer} />
            <Route exact path="/products" component={ProductsContainer} />
        </Switch>
    );
}

export default Routes;