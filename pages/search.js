import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ACCESS_TOKEN = 'BQDN2kqE25Rd3fXSwEGjjWafNhDwZp_dIg3nOr6vGNb0eDqDFDFIs8j80Sav6h06QcE8FxSHEc5d-atm5IhIhj4Pm3mJme3ip8SEUopv0UgHuudxUN0TEOAskXGvAAPpBQLXMlk0b0aeMmJWCXJ-SMMi_DiKpwUN-p-yLVYDGdqn_3RxgBaDQNwK0tmxOrMEl3rsmIP5KJ-nEEBEq2cj';

function Search() {

  return <Lookup />;
}

function SearchBar() {

  const [artist, setArtist] = useState("");

  const handleSubmit = async () => {

    console.log(artist);
    
      return fetch("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        
      }

      ,then((response) => {
        console.log(response.json().then(
            (data) => { console.log(data) }
        ));
    }))
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="searchbar">
        <input
          type="text"
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
      </label>
    </form>
  );
}

const Lookup = () => {
  return (
    <div className="container-fluid lookup">
      <div className="row-sm-12">
        <div>
          <h1 className="question">When is your birthday?</h1>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Search;
