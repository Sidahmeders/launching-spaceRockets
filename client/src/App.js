import React from 'react';
import {gql, useQuery} from '@apollo/client';
import './styles/App.css';
import Launches from './components/launches';



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
        <h1>SPACE-X Launches</h1>
        {
          loading ? <h2>Loading...</h2> :
          (error ?  <h3>ERROR: not A Rocket Found</h3> :
            <Launches data={data} />
          )
        }
      </div>
  );
}

export default App;
