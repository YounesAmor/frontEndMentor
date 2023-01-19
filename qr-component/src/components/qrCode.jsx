import React, { Component } from "react";
class QrCode extends Component {
  render() {
    return (
      <div className="w-[317px] h-[496px] flex flex-col justify-center content-center">
        <img
          className="border rounded-lg w-[290px] h-[290px] mx-auto mb-[25px] -mt-4"
          src={require("../assests/imgs/image-qr-code.png")}
          alt=""
        />
        <p className="text-slate-900 text-xl mx-auto text-center font-bold w-[250px] font-Outfit">
          Improve your front end skills by building projects
        </p>
        <p className="text-center mx-auto text-sm mt-4 text-gray-400 w-[250px] font-Outfit">
          Scan the QR code to visit frontend Mentor and take your coding
          expertise to the next level
        </p>
      </div>
    );
  }
}

export default QrCode;
