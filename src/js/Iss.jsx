import React from 'react';

class ISS extends React.Component{
    render(){
        return <section id="home" >
                <iframe 
                src={"https://www.youtube.com/embed/watch?v=RtU_mdL2vBM"} 
                frameBorder={"0"}
                scrolling={"no"}
                allowFullScreen
                ></iframe>
            </section>
    }
}

module.exports = ISS;