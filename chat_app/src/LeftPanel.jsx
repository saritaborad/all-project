import React, { Component } from "react";

export default class LeftPanel extends Component {
  render() {
    const { optionsArray, optionsSel } = this.props;

    return (
      <div>
        <div className="container">
          <h4>Choose Options</h4>

          <buttton
            className="btn btn-warning btn-sm"
            onClick={this.props.onClear}
          >
            Clear All
          </buttton>

          <br />
          <br />

          {this.showCheckBoxes(
            "Brand",
            optionsArray.brand,
            "brand",
            optionsSel.brand
          )}
          <br />

          {this.showCheckBoxes("RAM", optionsArray.ram, "ram", optionsSel.ram)}
          <br />
          {this.showRadios(
            "Processor",
            optionsArray.processor,
            "processor",
            optionsSel.processor
          )}
          <br />
          {this.showRadios(
            "Ratings",
            optionsArray.rating,
            "rating",
            optionsSel.rating
          )}
        </div>
      </div>
    );
  }
  showCheckBoxes = (label, arr, name, selArr) => {
    return (
      <React.Fragment>
        <label>{label} </label>
        {arr.map((opt, index) => (
          <div className="form-check-input">
            <input
              name="techsKnow"
              value={opt}
              checked={selArr.findIndex((sel) => sel === opt) >= 0}
              onChange={this.handleCheckboxChange}
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label">{opt}</label>
          </div>
        ))}
      </React.Fragment>
    );
  };

  showRadios = (label, arr, name, selVal) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        {arr.map((opt) => (
          <div className="form-check">
            <input
              type="radio"
              name={name}
              value={opt}
              className="form-check-input"
              checked={selVal === opt}
              onChange={this.handleChange}
            />
            <label className="form-check-label">{opt}</label>
          </div>
        ))}
      </React.Fragment>
    );
  };
}
