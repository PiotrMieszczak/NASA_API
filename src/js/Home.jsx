import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
            this.state={
                picOfDay: '',
                loaded: false,
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
         let date = this.randomDate(new Date(2015,8,30), new Date());
         const keyAPI ='LmHn5nJJ09HXRJWeindWjB144LHLIUAubdGKQ4w8';
         const url = 'https://api.nasa.gov/planetary/apod?api_key='+keyAPI+`&date=${date}`;
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