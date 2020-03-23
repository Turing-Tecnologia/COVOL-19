/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer/Footer';
import RequestHelp from './components/RequestHelp';

function App() {
  const [volunteers, setVolunteers] = useState([{}]);

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
      if (response.data) {
        const responseVol = await axios.get(
          `https://apirest-covol19.herokuapp.com//voluntariarse/voluntarios/localidade/${response.data.address.city_district}`
        );
        // n ta setando volunteers aq
        setVolunteers(responseVol.data);
        console.log(responseVol.data);
        console.log(volunteers);
      } else {
        console.error('Deu Ruim', error);
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
      <RequestHelp />
      <Footer />
    </div>
  );
}

export default App;
