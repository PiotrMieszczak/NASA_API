import React from 'react';

class Fullscreen extends React.Component{

    checkFullscreen = ()=>{

        if(typeof this.props.hide ==='function'){
            this.props.hide();
        }
    }

    handleSliderPrev = () =>{
         let index = this.props.index;
         index--;

         if(index < 0){
            index = this.props.gallery.length-1;
        }

         let newSrc = this.props.gallery[index].props.children.props.src
         if(typeof this.props.slider ==='function'){
            this.props.slider(newSrc,index);
        }
    }
    handleSliderNext = () =>{
         let index = this.props.index;
         index++;

        if(index > this.props.gallery.length-1){
            index = 0;
        }

         let newSrc = this.props.gallery[index].props.children.props.src
         if(typeof this.props.slider ==='function'){
            this.props.slider(newSrc,index);
        }
    }

    render(){
        console.log();
        return <div className={this.props.visible?'fullScreen':'hidden'}>
            {this.props.src&&
                <img 
                onClick={this.checkFullscreen}
                src={this.props.src}/>}
                <span className="prev"
                onClick={this.handleSliderPrev}>prev</span>
                <span className="next"
                 onClick={this.handleSliderNext}>next</span>
        </div>
    }
}

module.exports = Fullscreen;