import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="owenmicheal3rd@gmail.com"
        title="Kimbowa | Najjisoft"
        userImg="/assets/images/dummy.jpg"
      />

      <section className="video-grid"></section>
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
    </div>
  );
};

export default page;
