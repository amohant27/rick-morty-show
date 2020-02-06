import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { FILTER_HEREOS } from '../../actionsTypes';

const Filters = props => {
  const [filterName, setFilterName] = useState("");

  const handleAllChecked = event => {
    setFilterName(event.target.value);
    props.setFilter(event.target.value);
  };

  return (
    <div>
      <div className="col-md-3 col-xs-12 col-sm-12 left-bar">
        <div className="card">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title"> Species </h6>
            </header>
            <div className="filter-content">
              <div className="card-left-body">
                <form className="form-class">
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Human"
                      onClick={handleAllChecked}
                    />
                    <span className="form-check-label">Human</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Mythology"
                      onClick={handleAllChecked}
                    />
                    <span className="form-check-label">Mythology</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Other"
                      onClick={handleAllChecked}
                    />
                    <span className="form-check-label">Other Species</span>
                  </label>
                </form>
              </div>
            </div>
          </article>
        </div>

        <div className="card">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title"> Gender </h6>
            </header>
            <div className="filter-content">
              <div className="card-left-body">
                <form className="form-class">
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">Male</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">Female</span>
                  </label>
                </form>
              </div>
            </div>
          </article>
        </div>
        <div className="card">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title"> Origin </h6>
            </header>
            <div className="filter-content">
              <div className="card-left-body">
                <form className="form-class">
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">Unknown</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">Nuptia 4</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">Other Origins</span>
                  </label>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};


const mapDispatchtoProps = dispatch =>{
  return{
      setFilter: (filterName) =>{
        dispatch({ type: 'FILTER_HEREOS' , payload : filterName })
      }
  }
}

export default connect(null,mapDispatchtoProps)(Filters);
