import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header subHeader="Public Library" title="All Videos" />

      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard
            key={card.id}
            id={card.id}
            title={card.title}
            thumbnail={card.thumbnail}
            createdAt={card.createdAt}
            userImage={card.userImg}
            userName={card.username}
            views={card.views}
            visibility={card.visibility}
            duration={card.duration}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
