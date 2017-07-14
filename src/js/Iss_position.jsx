import React from 'react';
import ReactDOM from 'react-dom';
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
        
        getPossition(url,marker,map){
            fetch(url)
            .then( r => r.json() )
            .then( response => {
                 let lat = response.iss_position.latitude;
                 let lon = response.iss_position.longitude;
                 this.setState({
                    latitude: lat,
                    longitude: lon,
                    loaded: true,
                 })
            });
                marker.setLatLng([this.state.latitude, this.state.longitude]);
                map.panTo([this.state.latitude, this.state.longitude])
        }

        componentDidMount(){
            const url = "http://api.open-notify.org/iss-now.json";
            
             let map = this.map = L.map(ReactDOM.findDOMNode(this), {
                zoom:13,
                minZoom: 2,
                maxZoom: 6,
                layers: [
                    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    id: 'mapbox.comic',
                    accessToken: 'pk.eyJ1Ijoiemx5Z29zYyIsImEiOiJjajRvbHlyazgwY28zMnFwbXN1OGIxNXRzIn0.maCDdR1AhjL0drrVIc7mkQ'})
                ],
            });

            let marker = L.marker([this.state.latitude, this.state.longitude]).addTo(map);
        
            this.getPossition(url,marker,map)
            this.intervalId = setInterval( ()=>{
                this.getPossition(url,marker,map)
            },2000);

            map.fitWorld();
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
            clearInterval(this.intervalId);
            this.map = null;
        }
        
        render(){
                return <div id="map"></div>
        }
    }

module.exports = Iss_position;