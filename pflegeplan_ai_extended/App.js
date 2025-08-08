
import React, { useState } from 'react';
import Pflegeplan from './Pflegeplan';
import AboSimulation from './AboSimulation';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      {!loggedIn ? (
        <div>
          <h1>PflegePlan AI</h1>
          <p>Bitte melden Sie sich an:</p>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Willkommen!</h2>
          <Pflegeplan />
          <hr />
          <AboSimulation />
        </div>
      )}
    </div>
  );
}

export default App;
