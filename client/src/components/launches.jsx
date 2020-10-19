import React from 'react';
import '../styles/launches.css';

const Launches = ({data}) => {

  return (
    <div className="launches">
      {
        data.rockets.map(({rocket_name, rocket_type, rocket_id}) => (
            <div className="rocket" key={rocket_id}>
              <p>{rocket_name}</p>
              <p>{rocket_type}</p>
            </div>
        ))
      }
    </div>
  );
}



export default Launches;