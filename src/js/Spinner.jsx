import React from 'react';



class Spinner extends React.Component{
    render(){
        return <section id='spinnerSection'>
                <div className="main_spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                </div>
            </section>
    }

}

module.exports = Spinner;