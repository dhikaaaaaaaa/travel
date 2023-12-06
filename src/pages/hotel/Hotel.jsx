import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239429287.jpg?k=171da95ccc04569a444d6d9ae14d053a9e2156e4fe82af50eb5c58a3b513f8c7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239429357.jpg?k=93d85026588168b7830a136271947b7b91f672b9fee0bd7ee811815633f0f217&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239429257.jpg?k=69cac0253e9820044db97c0bc10c51a8f2a19618a00b8c51bed9ab96aded9940&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37803305.jpg?k=7fd6cbd32300af6a027fc92f28f54f7fc1cc93cdf2a7ebc36c7c194527b13e6b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37803305.jpg?k=7fd6cbd32300af6a027fc92f28f54f7fc1cc93cdf2a7ebc36c7c194527b13e6b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31609044.jpg?k=d6a3554352bf3a88414d26b133422670e146e87d3bada2fcb6dbd551bef5ef53&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">
            The Phoenix Hotel Yogyakarta - MGallery Collection
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Yogyakarta</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rp 2.000.000 at this property and get a free
            airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Get the celebrity treatment with world-class service at The
                Phoenix Hotel Yogyakarta - MGallery Collection
              </h1>
              <p className="hotelDesc">
                Located in the heart of Yogyakarta, The Phenix Hotel Yogyakarta
                - MGallery Collection is luxury accommodations in a colonial
                landmark from 1918. The 5-star hotel offers a spa, a fine-dining
                restaurant and spacious rooms with free WiFi. The outdoor pool
                is large and open all-year. Boasting classic interiors with
                Javanese and European elements in intricate details, the rooms
                at this property feature modern amenities such as flat-screen TV
                and air conditioning. Each room is fitted with a mini-bar and
                safety deposit box for your convenience. Hot shower facilities
                are available in the private bathroom.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>Rp 4.000.000 </b> (2 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
