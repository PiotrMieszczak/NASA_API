import React from 'react';

class Fullscreen extends React.Component{

    checkFullscreen = ()=>{

        if(typeof this.props.hide ==='function'){
            this.props.hide();
        }
    }
    forceUpdateBtn = ()=>{
        if(typeof this.props.forceUpdate ==='function'){
            this.props.forceUpdate();
        }
    }
    render(){

        return <div className={this.props.visible?'fullScreen':'hidden'}>
            {this.props.src&&
                <img 
                onClick={this.checkFullscreen}
                src={this.props.src}/>
            }
            <button
            onClick={this.forceUpdateBtn}>ZAMKNIJ</button>
        </div>
    }
}

module.exports = Fullscreen;