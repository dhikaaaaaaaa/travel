import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels/:id");
  };
  return (
    <div className="searchContainer">
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239429588.jpg?k=4d8375678fb76e2fbf66146ef66b09009ebaca219b79c2000024dde1900cdfa0&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">
            The Phoenix Hotel Yogyakarta - MGallery Collection
          </h1>
          <span className="siDistance">Yogyakarta</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rp 2.000.000</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={handleSearch}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/323167610.jpg?k=beda4bd00a3fa1699e261d3c9b93a31d0704203cd1a1915065662838072308c3&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Beachwalk Residence</h1>
          <span className="siDistance">
            Kuta Beach Road, 80361 Kuta, Indonesia
          </span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rp 1.800.000</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
