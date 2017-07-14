import React from 'react';
import Spinner from './Spinner.jsx';

    class Iss_position extends React.Component{
        constructor(props){
            super(props);
            this.state={
                loaded: false,
                latitude: 0,
                longitude:0,
            }
        }
        

        getArticle(url){
            fetch(url)
            .then( r => r.json() )
            .then( response => {
               
                 let lat = response.iss_position.latitude;
                 let lon = response.iss_position.longitude;
                  
                 this.setState({
                    latitude: lat,
                    longitude: lon,
                 })
                 console.log(this.state.latitude, this.state.longitude)
            });
        }

        componentDidMount(){
            const url = "http://api.open-notify.org/iss-now.json";
            this.getArticle(url)
            this.intervalId = setInterval( ()=>{
                this.getArticle(url)
            }, 5000);
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
        }
        
        render(){

            if(!this.state.loaded){ //if didn't get response from NASA API, render spinner
                return <Spinner />
            }else{
                return <section id="home">

                    </section>
            }
        }
    }

module.exports = Iss_position;