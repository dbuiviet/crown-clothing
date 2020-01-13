import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.cpn';

import { Switch, Route } from 'react-router-dom';

const Hatspage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);


function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/hats' component={Hatspage} />
            </Switch>
        </div>

        // <div className="App">
        //     <Homepage />
        // </div>
    );
}

export default App;
