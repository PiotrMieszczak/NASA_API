import React from 'react';
import {animate} from './animate.js';
import { IndexLink} from 'react-router';

class MainTemplate extends React.Component{
         componentDidMount(){
             animate();
        }
        render(){
            return <div> 
                        <header className="clearfix">
                            <nav>
                                <ul id="navigation">
                                    <li>
                                        <IndexLink to="/">Home</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="/iss">ISS Live Stream</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="/mars">spinner test</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="/tnyt">tnyt space news</IndexLink>
                                    </li>
                                </ul>
                            </nav>
                        </header>

                            {this.props.children}

                        <footer>
                        </footer>
                </div>

        }
}

module.exports = MainTemplate;