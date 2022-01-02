import React from 'react';
import useCallapi from '../Hook/useCallapi';

const Cardbelow = () => {

    const{weather}=useCallapi()

    return (
        <div className='Cardother'>
            <p><i className="fas fa-cloud"></i>{" Clouds "}{weather?.clouds.all}{"%"}</p>
            <p><i className="fas fa-wind"></i>{" Wind speed "}{weather?.wind.speed}{" m/s"}</p>
        </div>
    );
};

export default Cardbelow;