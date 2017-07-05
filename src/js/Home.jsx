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

    handleChangeBg=(e)=>{
            const section = document.querySelector('#home');
            const bgUrl = `url(${this.state.picOfDay})`;
            section.style.backgroundImage = `${bgUrl}`;

            e.target.style.display= 'none'; //hide button
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
        return <section id="home" >
                <img onClick={this.handleChangeBg}
                src="images/NASA_logo.svg" alt="nasa_logo"/>
            </section>
        }
    }
    

}

module.exports = Home;