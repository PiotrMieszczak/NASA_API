import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import MainTemplate from './MainTemplate.jsx';
import Home from './Home.jsx';
import Spinner from './Spinner.jsx';
import ISS from './Iss.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){

            return <Router history={hashHistory}>
                    <Route path="/" component={MainTemplate}>
                        <IndexRoute component={Home}/>
                        <Route path="/mars" component={Spinner}></Route>
                        <Route path="/iss" component={ISS}></Route>
                </Route>
            </Router>

        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

});
