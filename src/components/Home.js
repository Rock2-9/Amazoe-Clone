import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23445930"
            title="Ultimate Ears BOOM 3 Portable Waterproof Bluetooth Speaker - Night Black"
            price={93.9}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81p77PcQRbL._AC_SL1500_.jpg"
          />
          <Product
            id={5454}
            title="the lean start up "
            price={29.99}
            image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74800375/fee_786_587_png"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Thrustmaster T300 Ferrari Integral Alcantara Edition (Lenkrad inkl. 3-Pedalset, Force Feedback, 270° - 1080°, Eco-System, PS4 / PS3 / PC)"
            price={436.63}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91HHwbbjGOL._SL1500_.jpg"
          />
          <Product
            id="4903850"
            title="Apple Watch Series 5 (GPS + Cellular, 40MM) - Space Black Stainless Steel Case with Black Sport Band (Renewed)"
            price={762.69}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71wqARCKtPL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Oculus Quest All-in-one VR Gaming Headset – 128GB"
            price={535.17}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71nK%2BJjLzzL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="GIGABYTE Nvidia GV-N208SGAMING-8GC"
            price={706.77}
            rating={4}
            image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74800375/fee_786_587_png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
