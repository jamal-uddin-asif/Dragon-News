import React from "react";
import Header from "../Components/Header";
import RightAsides from "../Components/Asides/RightAsides";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useParams } from "react-router";
import { useData } from "../Hooks/useData";
import Container from "../Components/Container";

const NewsDetails = () => {
  const { id } = useParams();
  const { news } = useData();

  const findNews = news?.find((news) => news.id === id);
console.log(findNews)
  return (
    <>
      <Container>
        <header>
          <Header></Header>
        </header>
        <main className="grid grid-cols-12 gap-8">
          <section className="col-span-9">
            <NewsDetailsCard findNews={findNews}></NewsDetailsCard>
          </section>
          <section className="col-span-3">
            <RightAsides></RightAsides>
          </section>
        </main>
      </Container>
    </>
  );
};

export default NewsDetails;
