import React, { Component } from "react";

export default class Form extends Component {
  state = {
    person: {
      name: "",
      age: "",
      country: "",
      gender: "",
      passport: "",
      license: "",
      city: "",
      passportNum: "",
      designation: "",
      techsKnow: [],
    },
    countries: ["United State", "Canada", "India"],
    countryList: [
      {
        country: "Canada",
        cities: ["Toronto", "Montreal", "Vancouver"],
      },
      {
        country: "India",
        cities: ["New Delhi", "Mumbai", "Pune", "Chennai"],
      },
      {
        country: "United State",
        cities: ["London", "Bristol", "Manchester"],
      },
    ],
    designations: [
      "Developer",
      "Senior Developer",
      "Team Leader",
      "Architect",
      "Delivery Manager",
    ],
    techs: ["React", "Javascript", "JQuery", "AngularJS"],
  };

  handleChange = (e) => {
    console.log(e.currentTarget);
    const { currentTarget: input } = e;
    let s1 = { ...this.state };

    s1.person[input.name] = input.value;
    input.type === "checkbox"
      ? (s1.person[input.name] = input.checked)
      : (s1.person[input.name] = input.value);

    if (input.name === "country") s1.person.city = "";

    if (!s1.person.passport) s1.person.passportNum = "";

    this.setState(s1);
  };

  handleCheckboxChange = (e) => {
    const { target: input } = e;
    if (input.type === "checkbox") {
      if (input.name === "techsKnow") {
        let arr = this.updateCBs(
          input.checked,
          input.value,
          this.state.person.techsKnow
        );
        let { techsKnow } = this.state.person;
        this.setState({ techsKnow: arr }, () => {});
      }
    }
  };

  updateCBs = (checked, value, arr) => {
    if (checked) {
      arr.push(value);
    } else {
      let index = arr.findIndex((ele) => ele === value);
      if (index >= 0) arr.splice(index, 1);
    }
    return arr;
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    let {
      name,
      age,
      country,
      gender,
      passport,
      license,
      city,
      passportNum,
      designation,
      techsKnow,
    } = this.state.person;
    const { countries, countryList, designations, techs } = this.state;
    let cities = country
      ? countryList.find((c1) => c1.country === country).cities
      : [];
    return (
      <>
        <div className="container">
          <h5>Enter Details</h5>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <br />
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Your Age"
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Country</label>
            <select
              name="country"
              className="form-group"
              value={country}
              onChange={this.handleChange}
            >
              <option disabled value="">
                Select the Country
              </option>
              {countries.map((c1) => {
                return <option>{c1}</option>;
              })}
            </select>
          </div>
          <br />

          {country ? (
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                className="form-group"
                value={city}
                onChange={this.handleChange}
              >
                <option disabled value="">
                  Select the City
                </option>
                {cities?.map((c2) => {
                  return <option>{c2}</option>;
                })}
              </select>
            </div>
          ) : (
            ""
          )}

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-check-input"
              checked={gender === "Male"}
              onChange={this.handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-check-input"
              checked={gender === "Female"}
              onChange={this.handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
          <br />

          <div className="form-check">
            <input
              checked={passport}
              value={passport}
              onChange={this.handleChange}
              type="checkbox"
              name="passport"
              className="form-check-input"
            />
            <label className="form-check-label">Passport</label>
          </div>

          {passport ? (
            <div className="form-group">
              <label>Passport Number</label>
              <input
                type="text"
                name="passportNum"
                className="form-control"
                placeholder="Enter Passport Number"
                value={passportNum}
                onChange={this.handleChange}
              />
            </div>
          ) : (
            ""
          )}

          <div className="form-check">
            <input
              checked={license}
              value={license}
              onChange={this.handleChange}
              type="checkbox"
              name="license"
              className="form-check-input"
            />
            <label className="form-check-label">License</label>
          </div>
          <br />
          <label>Choose Designation</label>
          {designations.map((d1) => (
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="designation"
                value={d1}
                className="form-check-input"
                checked={designation === d1}
                onChange={this.handleChange}
              />
              <label className="form-check-label">{d1}</label>
            </div>
          ))}

          <br />
          <br />
          <label>Choose Technology </label>
          {techs.map((t1) => (
            <div className="form-check-input">
              <input
                name="techsKnow"
                value={t1}
                checked={techsKnow.findIndex((t2) => t2 === t1) >= 0}
                onChange={this.handleCheckboxChange}
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label">{t1}</label>
            </div>
          ))}
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}
