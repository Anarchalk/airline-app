import { useEffect, useState } from 'react'
import flightData from './pages/data/cabinData.json';

export type FlightData = {
  flightNumber: string;
  aircraft: string;
  cabins: Array<{
    cabinType: string;
    layout: string;
    rows: number;
  }>;
}

function App() {
  const { flightNumber, aircraft } = flightData;
  const [selectedCabin, setSelectedCabin] = useState("Business");

useEffect(() => {
  console.log(flightData);
}, []);
  
  const handleCabinClick = (cabinType: string) => {
  setSelectedCabin(cabinType);
};

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Airline home">
          <span>Airline</span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a className="active" href="#book">Book a flight</a>
        </nav>
        <button className="sign-in" type="button">Sign in <span aria-hidden="true">↗</span></button>
      </header>
      <section className="search-card" aria-labelledby="search-title">
        <div className="card-heading">
          <div>
           <h3>Cabin Amenities Explorer</h3>
            <p>Flight: {flightNumber}</p>
            <p>Aircraft: {aircraft}</p>
          </div>
        </div>
        <div className="cabin-type">
          {flightData.cabins.map((cabin) => (
            <button 
              key={cabin.cabinType}
              onClick={() => handleCabinClick(cabin.cabinType)}
              className={selectedCabin === cabin.cabinType ? "active" : ""}
            >
              {cabin.cabinType}
            </button>
          ))}
          {/* if cabinType is selected, display its details below */}
          {flightData.cabins.filter(cabin => cabin.cabinType === selectedCabin).map(cabin => (
            <div key={cabin.cabinType} className="cabin-details">
              <p>Row: {cabin.rows.map(row => row.rowNumber).join(", ")}</p>
     
            </div>
          ))}
          {flightData.cabins.filter(cabin => cabin.cabinType === selectedCabin).map(cabin => (
            <div key={cabin.cabinType} className="cabin-details">
              <p>Amenities: {
                cabin.rows.map((row) => row.seats.map((seat) => 
      
                    seat.amenities.extraLegroom 
                      ? <span>ExtraLegroom</span>
                      : null
    
              ))}</p>
     
            </div>
          ))}
          
        </div>

        
      </section>

      <section className="inspiration" id="destinations">

      </section>
      <footer id="my-trips"> <span>© 2025 Airline</span></footer>
    </main>
  )
}

export default App

// present difference between the amenities of different cabin types
