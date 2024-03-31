import React, { Component } from "react";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import Switch from "react-switch";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

class App extends Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      checked: false,
      color: "light",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.theme(this.state.checked);
  }

  theme(checked) {
    if (checked) {
      this.setState({ checked, color: "dark" });
      document.getElementById("root").style.color = "white";
      document.getElementById("root").style.backgroundColor = "#202124";
    } else {
      this.setState({ checked, color: "light" });
      document.getElementById("root").style.color = "#202124";
      document.getElementById("root").style.backgroundColor = "white";
    }
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.theme(checked);
  }

  render() {
    return (
      <React.Fragment>
        <Nav color={this.state.color}></Nav>
        <label
          style={{ position: "fixed", top: "45%", right: "0", padding: "10px" }}
        >
          <span></span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#ffffff"
            onHandleColor="#303134"
            handleDiameter={30}
            uncheckedIcon={<MdDarkMode />}
            checkedIcon={<MdWbSunny />}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
        <Footer color={this.state.color}></Footer>
      </React.Fragment>
    );
  }
}

export default App;
