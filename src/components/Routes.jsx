import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const Routes = () => {
    return (
        <div className="center">
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    );
};

export default Routes;