import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
            this.state={
                picOfDay: '',
                loaded: false,
            }
    }

    getData(url){
         fetch(url)
            .then( r => r.json() )
            .then( response => {
                this.setState({
                    loaded: true,
                    picOfDay: response.hdurl,
                })
        });
    }

    componentDidMount(){
         const keyAPI ='LmHn5nJJ09HXRJWeindWjB144LHLIUAubdGKQ4w8';
         const url = 'https://api.nasa.gov/planetary/apod?api_key='+keyAPI;
         this.getData(url);
    }
    
    render(){
        if(!this.state.loaded){
            return null;
        }else{

            const bgUrl = `url(${this.state.picOfDay})`;
            console.log(typeof bgUrl);
        return <section id="home" >
                <img
                src="images/NASA_logo.svg" alt="nasa_logo"/>
            </section>
        }
    }
    

}

module.exports = Home;