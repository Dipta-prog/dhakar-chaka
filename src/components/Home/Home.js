import React from 'react';
import backgroundImage from '../../images/Bg.png';
import items from '../Fakedata/Fakedata.js'
import Services from '../Services/Services';
console.log(items);

const Home = () => {
    const bgStyle = { backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: '100% 750px' };

    return (
        <div style={bgStyle} className="d-flex align-items-center">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        items.map(item => {
                            return (
                                <div class="col-md-3">
                                    <Services key={item.transport} item={item}></Services>
                                </div>
                            )
                        })
                    }
                </div >
            </div>
        </div>

    );
};

export default Home;