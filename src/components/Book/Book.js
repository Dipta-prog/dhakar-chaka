import React, { useState } from 'react';
import { useParams } from 'react-router';
// import items from '../Home/Home.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import items from '../Fakedata/Fakedata.js'
import mapImg from '../../images/Map.png';
import man from '../../images/peopleicon.png'
import { useEffect } from 'react';


const Book = () => {
    const { transport } = useParams();
    const [destitation, setDestitation] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        items.map(item => {
            if (item.transport === transport) setSelectedItem(item);
            return(item);
        })
    }, [transport])


    return (
        <div className="container d-flex justify-content-between ">
            <div className="row">
                {/* search form & details */}
                <div className="col-md-4">
                    {destitation && <div className="card col pb-2 mb-3" style={{ textAlign: 'center', paddingTop: '19px', backgroundColor: 'gray', paddingRight: '23px' }}>

                        <div>
                            <div style={{ border: '1px solid black', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-between">
                                        <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{selectedItem.transport} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${selectedItem.rent}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ border: '1px solid black', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
                                <div className="container">
                                    <div className=" d-flex justify-content-between">
                                        <img style={{ width: '20%', height: '40px' }} src={selectedItem.imgUrl} alt="" />
                                        <p>{selectedItem.transport} <img style={{ width: '20%', paddingLeft: "8px" }} src={man} alt="" /> {selectedItem.seat}</p>
                                        <p>${selectedItem.rent}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ border: '1px solid black', height: '60px', margin: '5px', paddingTop: '13px' }} className=" card col pb-2 mb-3 ">
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
                                <div className="form-group">
                                    <label>Pick From</label>
                                    <input required type="text" className="form-control" placeholder="From" />
                                </div>

                                <div className="form-group">
                                    <label>Pick To</label>
                                    <input required type="text" className="form-control" placeholder="To" />
                                </div>
                                <button onClick={() => setDestitation(!destitation)} type="submit" className="btn btn-primary btn-block">Search</button>
                            </form>
                        </div>
                    </div>
                    }
                </div>

                {/* map */}
                <div className="col-md-8">
                    <div>
                        <img src={mapImg} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Book;