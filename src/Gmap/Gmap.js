// import './App.css';
import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
    position: 'relative',  
    width: '700px',
    height: '600px',
  }
//   style={containerStyle}

class Gmap extends Component {
  render() {
    return (
      <div className='card' style={containerStyle}>
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBTczhodQPwZ_KqmQrzkvfpkMQqrvOrcVc")
})(Gmap)
