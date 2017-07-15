import React from 'react';
import Map from './Map.jsx';
    class Iss_position extends React.Component{
        render(){
                return <section id="home">
                            <div id="iss_info"></div>
                            <Map />
                    </section>
                
        }
    }

module.exports = Iss_position;