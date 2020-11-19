import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: "",
    };
  }

  setInputNumber(value) {
    if (value.target.value.substring(0, 1) !== "+") {
      // console.log("salat")
      this.setState({
        inputNumber: "+62" + value.target.value,
      });
    } else {
      console.log("benar");
    }
    this.setState({
      inputNumber: value.target.value,
    });
  }

  handleClick = (v) => {
    // console.log(this.state.inputNumber.substring(0, 1))
    if (this.state.inputNumber.substring(0, 1) == 0) {
      var string1 = "+62";
      var string2 = this.state.inputNumber.substring(1);
      var res = string1.concat(string2);
      console.log(res)
      this.setState({
        inputNumber:res
      })
      this.props.history.push({
        pathname: res,
        state: {
          inputNumber: res,
        },
      });
    } else if(this.state.inputNumber.substring(0, 1) !== "+"){
      // console.log("benar");
      var string1 = "+62";
      // var string2 = this.state.inputNumber.substring(1);
      var res = string1.concat(this.state.inputNumber);
      console.log(res)
      this.setState({
        inputNumber:res
      })
      this.props.history.push({
        pathname: res,
        state: {
          inputNumber: res,
        },
      });
    } else{
      this.props.history.push({
        pathname: this.state.inputNumber,
        state: {
          inputNumber: this.state.inputNumber,
        },
      });
    }

    // this.props.history.push({
    //   pathname: this.state.inputNumber,
    //   state: {
    //     inputNumber: this.state.inputNumber,
    //   },
    // });
  };

  generateQRCode() {}

  render() {
    return (
      <div className="home-container">
        <div className="home-box">
          <div className="home-box-content">
            <a>Masukkan nomor telepon</a>
            <input
              onChange={this.setInputNumber.bind(this)}
              placeholder="Masukkan nomor telepon"
            />
            {/* <Link to="/QRnumber"> */}
              <button
                onClick={() => this.handleClick()}
              >
                Buat Link WA
              </button>
            {/* </Link> */}
          </div>
        </div>
        {/* <a>{this.state.inputNumber}</a> */}
      </div>
    );
  }
}

export default Home;
