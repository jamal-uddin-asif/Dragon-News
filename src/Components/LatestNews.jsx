import React from "react";
import Marquee from "react-fast-marquee";
import { useData } from "../Hooks/useData";

const LatestNews = () => {
  const {news} = useData()
  console.log(news)
  const LatestNews = news?.filter(singleNews=> singleNews.category_id === 2)
  console.log(LatestNews)

  return (
    <div className="flex items-center bg-base-200 p-4 my-5">
      <p className="bg-secondary p-2 mr-2 text-white">Latest</p>
      <Marquee pauseOnHover={true}>
        {
          LatestNews?.map(news=> <p>{news?.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default LatestNews;
