import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-primary my-4">Find Us On</h1>
      <div className="space-y-3">
        <button className="btn w-full text-left">
          <FaFacebook></FaFacebook>Facebook
        </button >
        <button className="btn w-full text-left">
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="btn w-full text-left">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
