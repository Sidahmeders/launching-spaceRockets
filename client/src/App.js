import React from 'react';
import {gql, useQuery} from '@apollo/client';
import './styles/App.css';



const rocketsQuery =  gql`
  query RocketQuery {
    rockets {
      rocket_id
      rocket_name
      rocket_type
    }
  }
`;

function App() {
  const {loading, error, data} = useQuery(rocketsQuery);
  return (
      <div className="App">
        <h1>Hello World</h1>
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
      </div>
  );
}

export default App;
