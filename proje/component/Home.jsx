import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="../Assets//mile1-assets//home-banner.png"
          alt="Teknolojik Yemekler"
        />
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
        <Link className="link" to="/OrderPizza">
          Acıktım
        </Link>
      </div>
    </div>
  );
}

export default Home;
