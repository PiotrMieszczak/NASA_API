import React from 'react';
import Map from './Map.jsx';
import Iss_info from './Iss_info.jsx';
    class Iss_position extends React.Component{
        render(){
                return <section id="home">
                            <Iss_info />
                            <Map />
                    </section>
                
        }
    }

module.exports = Iss_position;