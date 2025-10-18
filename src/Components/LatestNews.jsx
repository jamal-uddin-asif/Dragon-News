import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-4 my-5">
      <p className="bg-secondary p-2 mr-2 text-white">Latest</p>
      <Marquee pauseOnHover={true}>
        <p>
          {" "}
          animi reprehenderit eius deserunt praesentium suscipit dignissimos
          impedit magni enim labore ipsum.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
