import React from 'react';



class Spinner extends React.Component{
    render(){
        return <div className="main_spinner">
                <div className="secondary_spinner">
                </div>
                <div className="third_spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                </div>
        </div>
    }

}