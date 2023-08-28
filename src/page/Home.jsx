import React from "react";
import "../page/style.scss"
const Home = () => {
  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home__block">
            <div className="home__wrapper">
              <h1>Lorem ipsum dolor <br /> sit.</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <div>
                <button>App Store</button>
                <button>Google Play</button>
              </div>
            </div>
            <img className="home__img" src="" alt="logo" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
