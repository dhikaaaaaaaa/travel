import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faCar,
  faPlane,
  faTaxi,
  faTrain,
  faCalendarDays,
  faPerson,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    dewasa: 0,
    anak: 0,
    kamar: 0,
  });
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotel</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Tiket Pesawat</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Rental Mobil</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTrain} />
            <span>Tiket Kereta Api</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Bandara</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">
              Search deals on hotels, homes, and much more...
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${options.dewasa} Dewasa - ${options.anak} anak - ${options.kamar} Kamar`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionsText">Dewasa</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.dewasa < 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("dewasa", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.dewasa}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("dewasa", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsText">anak</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.anak <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("anak", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.anak}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("anak", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsText">Kamar</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.kamar < 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("kamar", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.kamar}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("kamar", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleSearch}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
