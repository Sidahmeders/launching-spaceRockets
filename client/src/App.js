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
          loading ? <h2>Loading...</h2> :
          (error ?  <h3>ERROR: not A Rocket Found</h3> :
           <div>
             {data.rockets.map(r => {
               return (
                 <div key={r.rocket_id} style={{
                   color:"white",
                 }}>
                   <h2>{r.rocket_name}</h2>
                   <h3>{r.rocket_id}</h3>
                 </div>
               )
             })}
            </div>
          )
        }
      </div>
  );
}

export default App;
