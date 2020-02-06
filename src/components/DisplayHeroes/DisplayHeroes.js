import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Filters from "../Filters/Filters";
import { connect } from "react-redux";

const DisplayHeroes = props => {
  const [hereos, setHereos] = useState([]);
  useEffect(() => {
    setHereos(props.hereos);
    console.log(hereos);
    if (props.filteredBy) {
      let filteredHereos =
        props.hereos &&
        props.hereos.filter(hero => {
          return hero.species === props.filteredBy;
        });
      setHereos(filteredHereos);
    }
  }, [props.filteredBy]);

  return (
    <div>
      <Filters />
      <div className="row  col-md-8  col-xs-12  col-sm-12 right-bar">
        {hereos &&
          hereos.map((item, index) => (
            <div
              className="cardSet list-items-css col-md-3  col-xs-6 col-sm-6 "
              key={index}
            >
              <img src={item.image} className="card-img-top" alt="" />
              <div className="card-right-body">
                <p className="card-text">{item.name}</p>
                <p className="card-title">id: {item.id}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="li-key">STATUS </span>
                  <span className="li-value">{item.status}</span>{" "}
                </li>
                <li className="list-group-item">
                  <span className="li-key">SPECIES </span>
                  <span className="li-value">{item.species}</span>
                </li>
                <li className="list-group-item">
                  {" "}
                  <span className="li-key">GENDER </span>
                  <span className="li-value">{item.gender}</span>
                </li>
                <li className="list-group-item" style={{ height: "60px" }}>
                  <div className="row">
                    <div className="col-md-2">
                      <span className="li-key">ORIGIN </span>
                    </div>
                    <div className="col-md-10">
                      {" "}
                      <span className="li-value">{item.origin.name}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item li-last-item">
                  <div className="row">
                    <div className="col-md-2">
                      <span className="li-key">LAST LOCATION </span>
                    </div>
                    <div className="col-md-10">
                      {" "}
                      <span className="li-value">{item.location.name}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    filteredBy: state.filterBy
  };
};
export default connect(
  mapStatetoProps,
  null
)(DisplayHeroes);
