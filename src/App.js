import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import RequestHelp from './components/RequestHelp';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [volunteers, setVolunteers] = useState([{}]);
  const [city, setCity] = useState('')
  function localization() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${crd.latitude}&lon=${crd.longitude}`
      );
      if(response.data){
        const responseVol = await axios.get(`https://apirest-covol19.herokuapp.com//voluntariarse/voluntarios/localidade/${response.data.address.city_district}`)
        setVolunteers(responseVol.data)
      }else{
        console.error('Deu Ruin' , error)
      }
      
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  useEffect(() => {
    localization();
  }, []);

  return (
    <div className="App">
      <Header />
      <Form />
      <RequestHelp volunteers={volunteers} city={city} />
      <Main volunteers={volunteers} />
      <Footer volunteers={volunteers} />
    </div>
  );
}

export default App;
