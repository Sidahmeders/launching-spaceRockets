import React from 'react';


{
    loading ? <div>loading..::..</div> : (
      error ? <h2>Error:::</h2> : data.rockets.map(({rocket_name, rocket_type, rocket_id}) => (
        <div key={rocket_id}>
          <p>{rocket_name}</p>
          <p>{rocket_type}</p>
        </div>
      ))
    )
  }
