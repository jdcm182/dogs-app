import React, { useState } from 'react';
import Select from "./components/Select";
import Card from './components/Card'


const initialDog = {
  image: "https://www.natureplprints.com/p/729/dalmatian-dog-barney-6-years-play-bow-stance-19114405.jpg.webp",
  breed: {
    id: "8",
    name: "Dalmata"
  }
}


function App() {

  const [dog, setDog] = useState(initialDog);

  return (
    <div className="app">
      <Select />
      <Card dog={dog} />
    </div>
  );
}

export default App;
