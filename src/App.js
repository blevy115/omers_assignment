import React from 'react';
import './App.css';
import Card from './components/Card';

const App = ({ cardInfo: { status, data } }) => {

  return (
    <div className="App">
      <h1>OMERS ASSIGNMENT</h1>
      {
        status === "pass" ?
        data.map((card) => {
          return <Card
            key={data.indexOf(card)} personalInformation={card}
          />
        }) :
        <h2 className="error-text">There was an error loading the data</h2>
      }
      <h5 id="author">Created By Brandon Levy</h5>
    </div>
  );
}

export default App;
