import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/323167610.jpg?k=beda4bd00a3fa1699e261d3c9b93a31d0704203cd1a1915065662838072308c3&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Beachwalk Residence</span>
        <span className="fpCity">Kuta</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
        <span className="fpPrice">Starting from Rp1.800.000 </span>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239429588.jpg?k=4d8375678fb76e2fbf66146ef66b09009ebaca219b79c2000024dde1900cdfa0&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Phoenix Hotel </span>
        <span className="fpCity">Yogyakarta</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Excellent</span>
        </div>
        <span className="fpPrice">Starting from Rp2.000.000 </span>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/506414896.jpg?k=45a9530861326e091117d5ad9393b7dab32a73cb8a9bffa3f86cdc97b4b087e3&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          DoubleTree by Hilton Jakarta - Diponegoro
        </span>
        <span className="fpCity">Jakarta</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Excellent</span>
        </div>
        <span className="fpPrice">Starting from Rp1.500.000 </span>
      </div>
    </div>
  );
};

export default FeaturedProperties;
