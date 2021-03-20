import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
// import items from '../Home/Home.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import items from '../Fakedata/Fakedata.js'

const Book = () => {
    const { transport } = useParams();
   
    return (
        <div style={{ textAlign: 'center' }}>            
            {
                items.map(item => {
                    if (item.transport === transport) {
                        return (
                            <div>
                                <h2>Transport: {item.transport}</h2>
                                <img src={item.imgUrl} alt=""/>
                            </div>
                        );
                    }
                })
            }
            <div>
                {/*  */}
            </div>
        </div>
    );
};

export default Book;