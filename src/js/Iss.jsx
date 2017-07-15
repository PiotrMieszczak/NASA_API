import React from 'react';

class ISS extends React.Component{
    render(){
        return <section id="home" >
                <iframe 
                src={"https://www.youtube.com/embed/RtU_mdL2vBM"} //embed endpoint allows outside requests, /watch doesn't
                frameBorder={"0"}
                scrolling={"no"}
                allowFullScreen
                ></iframe>
            </section>
    }
}

module.exports = ISS;