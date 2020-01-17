import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.cpn';
import ShopPage from './pages/shop/shop.cpn';
import Header from './components/header/header.cpn';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.cpn'

import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInSignUpPage} />
            </Switch>
        </div>
    );
}

export default App;
