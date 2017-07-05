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

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return <Router history={hashHistory}>
                <Route path="/" component={MainTemplate}>
                
                </Route>
            </Router>

        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );


});
