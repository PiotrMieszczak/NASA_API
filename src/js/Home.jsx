import React from 'react';
// import {randomDate} from './randomDate.js';

class Home extends React.Component{
    constructor(props){
        super(props);
            this.state={
                loaded: false,
                response: [],
            }
    }

    randomDate(start, end){
        end = new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
        let year = end.getUTCFullYear().toString();

        function getMonth(objEnd){
             let _month = objEnd.getUTCMonth()+1; //getUTCMonth return 0-11 ;
             if(_month < 10 ){
               return '0'+_month; //return string 09
             }else{
               return _month.toString(); //return string;
             }
        }
        let month = getMonth(end);
        let day = end.getUTCDate().toString();
        return `${year}-${month}-${day}`;
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

    componentDidMount(){
        const keyAPI ='LmHn5nJJ09HXRJWeindWjB144LHLIUAubdGKQ4w8';

        let datesArray = []; //get 6 random dates for gallery
        let urlsArray = []; //get 6 diffrent urls
        for(let i =0;i < 6;i++){
            let date = this.randomDate(new Date(2015,8,30), new Date());
            datesArray.push(date);
            let url = 'https://api.nasa.gov/planetary/apod?api_key='+keyAPI+`&date=${date}`;
            this.getData(url);
        }
    }

    //EVENTS
    handleChangeBg=(e)=>{
            e.target.style.display= 'none'; //hide button
            const nasaGallery = document.querySelector('.nasaGallery');
            nasaGallery.style.display ='flex'
    }   

   
    handleFullscreen=(src)=>{
        console.log('test');
          const newDiv = document.createElement('div');
          const sectionHome = document.querySelector('#home')
          const nasaGallery = document.querySelector('.nasaGallery')
          nasaGallery.style.display ='none'
          newDiv.innerHTML = '<div class="fullScreen"><img src="'+src+'"></div>';
          sectionHome.appendChild(newDiv);

    }
    render(){

        const galleryAPOD = [...this.state.response].map( (singleResponse)=>{
            return <li key={singleResponse.date}>
                        <img 
                        onClick={e=>this.handleFullscreen(singleResponse.url)}src={singleResponse.url} alt="random_nasaPic"/>
                    </li>
        })

        if(!this.state.loaded){
            return null;
        }else{

        return <section id="home" >
                <img id="nasaLogo"
                onClick={this.handleChangeBg}
                src="images/NASA_logo.svg" alt="nasa_logo"/>
                <ul className="nasaGallery">
                    {galleryAPOD}
                </ul> 
            </section>
        }
    }
    

}

module.exports = Home;