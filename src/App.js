import React, { useState, useEffect } from 'react';
import Select from "./components/Select";
import Card from './components/Card';
import getDog from './helpers/getDog';


const initialDog = {
  image: "https://www.natureplprints.com/p/729/dalmatian-dog-barney-6-years-play-bow-stance-19114405.jpg.webp",
  breed: {
    id: "8",
    name: "Dalmata"
  }
}


function App() {

  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = () => {
    getDog()
      .then((newDog) => {
        setDog(newDog);
        //console.log('newDog: ', newDog);
      })
  }

  return (
    <div className="app">
      <Select />
      <Card dog={dog} />
    </div>
  );
}

export default App;
