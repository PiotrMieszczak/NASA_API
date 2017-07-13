import React from 'react';
// import {randomDate} from './randomDate.js';
import Fullscreen from './Fullscreen.jsx';
import Spinner from './Spinner.jsx';

class Home extends React.Component{
    constructor(props){
        super(props);
            this.state={
                loaded: false,
                response: [],
                src: false,
                fullscreenVisible: false, //gallery visibility 
                intro: true, //logo visibility
            }
    }

    getData(url){ //get response from NASA API - APOD (pic of the day)
        
         fetch(url)
            .then( r => r.json() )
            .then( response => {
                let newResponseArray = this.state.response.slice();
                newResponseArray.push(response);
                this.setState({
                    loaded: true,
                    response: newResponseArray,
            })
        });
    }

    componentDidMount(){ //get pictures from NASA API

        const keyAPI ='LmHn5nJJ09HXRJWeindWjB144LHLIUAubdGKQ4w8';
        let datesArray = []; //get 6 random dates for gallery
        let urlsArray = []; //get 6 diffrent urls
        for(let i =0;i < 6;i++){
            let date = randomDate(new Date(2015,8,30), new Date());
            datesArray.push(date);
            let url = 'https://api.nasa.gov/planetary/apod?api_key='+keyAPI+`&date=${date}`;
            this.getData(url);
            }
    }
    //EVENTS
    handleChangeBg=(e)=>{
            // e.target.style.display= 'none'; //hide button
            const nasaGallery = document.querySelector('.nasaGallery');
            
            this.setState({
                intro: false,
            })
    }   
    handleFullscreen=(src)=>{ //display clicked photo in fullscreen
        this.setState({
            src: src,
            fullscreenVisible: true,
        })
    }
    handleCloseFullscreen = ()=>{
        this.setState({
            src: false,
            fullscreenVisible: false,
        })
    }
    handleHideGallery = ()=>{ //hide gallery/show logo event
        this.setState({
            intro: true,
            fullscreenVisible: false,
        })
    }
    render(){

        const galleryAPOD = [...this.state.response].map( singleResponse=>{ 
            return <li key={singleResponse.date}>
                        <img 
                        onClick={e=>this.handleFullscreen(singleResponse.url)}src={singleResponse.url} alt="random_nasaPic"/>
                    </li>
        })

        if(!this.state.loaded){ //if didn't get response from NASA API, render spinner
            return <Spinner />
        }else{

        return <section id="home" >
                <img id="nasaLogo"  className={!this.state.intro && 'hidden'}
                onClick={this.handleChangeBg}
                src="images/NASA_logo.svg" alt="nasa_logo"/>
                <ul className={(!this.state.fullscreenVisible && !this.state.intro)?'nasaGallery':'hidden'}>
                    {galleryAPOD}
                    <div id="closeGallery">
                        <button onClick={this.handleHideGallery}
                        >Close Gallery</button>
                    </div>
                </ul> 
                <Fullscreen 
                hide={this.handleCloseFullscreen}
                src={this.state.src} 
                visible={this.state.fullscreenVisible}
                forceUpdate={this.forceUpdate}/>
            </section>
        }
    }
    

}

module.exports = Home;