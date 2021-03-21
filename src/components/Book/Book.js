import React, { useState } from 'react';
import { useParams } from 'react-router';
// import items from '../Home/Home.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import items from '../Fakedata/Fakedata.js'
import mapImg from '../../images/Map.png';
import man from '../../images/peopleicon.png'
import { useEffect } from 'react';
import pin from '../../images/Screenshot 2021-03-21 193248.png'


const Book = () => {
    const { transport } = useParams();
    const [destitation, setDestitation] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


    useEffect(() => {
        items.map(item => {
            if (item.transport === transport) setSelectedItem(item);
            return (item);
        })
    }, [transport]);

    const handleBlur = (event) => {
        if (event.target.name === 'from') {
            setFrom(event.target.value);
        }
        if (event.target.name === 'to') {
            setTo(event.target.value);
        }
    }


    console.log(from, to);

    const handleBothFormFilled = () => {
        if (from.length > 2 && to.length > 2) {
            console.log("inside both form filled");
            setDestitation(!destitation);
        }
    }

    return (
        <div className="container d-flex justify-content-between ">
            <div className="row">
                {/* search form & details */}
                <div className="col-md-4">
                    {destitation && <div className="card col pb-2 mb-3" style={{ textAlign: 'center', paddingTop: '19px', backgroundColor: '#e6e9ec', paddingRight: '23px' }}>

                        <div>

                            {/* startPoint to destination */}
                            <div style={{ border: '1px solid #ff6e40', height: '90px', margin: '5px', paddingTop: '13px', backgroundColor: '#ff6e40', borderRadius: '10px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-start">
                                        {/* <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{from} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${to}</p> */}
                                        <div>
                                            <img src={pin} style={{ height: '60px', paddingTop: '5px' }} alt="" />
                                        </div>
                                        <div>
                                            <p style={{ paddingLeft: '5px', color: 'white', fontWeight: '600' }}>{from}</p>
                                            <p style={{ paddingLeft: '7px', color: 'white', fontWeight: '600' }}>{to}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* transport details */}
                            <div style={{ border: '1px solid white', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-between">
                                        <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{selectedItem.transport} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${selectedItem.rent}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ border: '1px solid white', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-between">
                                        <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{selectedItem.transport} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${selectedItem.rent}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ border: '1px solid white', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-between">
                                        <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{selectedItem.transport} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${selectedItem.rent}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    }

                    {!destitation && <div>
                        <div className="card col pb-2 mb-3">


                            <form>
                                <div>
                                    {/* date time */}
                                    <label>Choose (date and time):</label>
                                    <input type="datetime-local" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label>Pick From</label>
                                    <input required type="text" name='from' onBlur={handleBlur} className="form-control" placeholder="From" />
                                </div>

                                <div className="form-group">
                                    <label>Pick To</label>
                                    <input required type="text" name='to' onBlur={handleBlur} className="form-control" placeholder="To" />
                                </div>
                                <button onClick={handleBothFormFilled} type="submit" className="btn btn-primary btn-block">Search</button>
                            </form>
                        </div>
                    </div>
                    }
                </div>

                {/* map */}
                <div className="col-md-8">
                    <div>
                        <img src={mapImg} style={{ width: '100%' }} alt="" />

                        {/* <Map google={this.props.google} zoom={14}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                            </InfoWindow>
                        </Map> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default Book;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8")
})(Book)