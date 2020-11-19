import React, { Component } from "react";
import "./qrcode.css";

import QRCode from "qrcode.react";

class QRGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // propsss: this.props.location.pathname,
      number: "https://wa.me/"+this.props.location.pathname,
    };
  }

  render() {
    console.log("Path", this.props.location.state)
    console.log("Pathname", this.props.location.pathname)
    return (
      <div className="qrcode-container">
        <div className="qrcode-box">
          <a>Scan Me!</a>
          <div style={{marginTop:"10px"}}>
            <QRCode value={this.state.number} />
          </div>
        </div>
      </div>
    );
  }
}

export default QRGenerator;
