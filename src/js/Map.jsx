import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component{
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
                map.panTo([this.state.latitude, this.state.longitude]) //center map on ISS
        }

        componentDidMount(){

            const url = "http://api.open-notify.org/iss-now.json";
            console.log(ReactDOM.findDOMNode(this))
             let map = this.map = L.map('map', {
                zoom:13,
                minZoom: 2,
                maxZoom: 6,
                layers: [ //map layer imported from mapbox
                    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    id: 'mapbox.streets',
                    accessToken: 'pk.eyJ1Ijoiemx5Z29zYyIsImEiOiJjajRvbHlyazgwY28zMnFwbXN1OGIxNXRzIn0.maCDdR1AhjL0drrVIc7mkQ'})
                ],
            });

            let myIcon = L.icon({
                iconUrl: 'images/iss.svg',
                iconSize: [50, 50],
                className: 'iss_icon',
            });

            let iss_marker = L.marker([this.state.latitude, this.state.longitude],{icon: myIcon}).addTo(map);
            
            this.getPossition(url,iss_marker,map)
            this.intervalId = setInterval( ()=>{
                this.getPossition(url,iss_marker,map)
            },2000);

            map.fitWorld();
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
            clearInterval(this.intervalId);
            this.map = null;
        }

        render(){
            return <div id="map" ref="map"/>
        }

}

module.exports = Map;