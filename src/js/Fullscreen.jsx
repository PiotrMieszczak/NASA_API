import React from 'react';

class Fullscreen extends React.Component{
    constructor(props){
        super(props);
    }
    checkFullscreen = ()=>{

        if(typeof this.props.hide ==='function'){
            this.props.hide();
        }
    }
    render(){
        console.log(this.props.hide);
        return <div className={this.props.visible?'fullScreen':'hidden'}>
            {this.props.src&&
                <img 
                onClick={this.checkFullscreen}
                src={this.props.src}/>
            }
        </div>
    }
}

module.exports = Fullscreen;