import React from 'react';
import {animate} from './animate.js';
import { IndexLink} from 'react-router';

class MainTemplate extends React.Component{

        componentDidMount(){
            console.log('zaladowany');
            animate();
        }
        render(){
            return <div> 
                        <header>
                            <nav>
                                <ul>
                                    <li>
                                        <IndexLink to="/">Home</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="/">Mars Rover Gallery</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="/">Główna</IndexLink>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <section>
                            {this.props.children}
                        </section>
                        <footer>
                        </footer>
                        <canvas></canvas>
                </div>

        }
}

module.exports = MainTemplate;