import React, { useEffect, useState } from "react";
import axios from "axios";
import Story from "../Story/Story";
import "./Dashboard.css";
import { BasicButton } from "../../common/styled-components/Buttons";

export default function Dashboard() {
  const [stories, setStories] = useState<any[] | null>(null);
  const [amountToShow, setAmountToShow] = useState<number>(10);
  const [kindOfStories, setKindOfStories] = useState("topstories");

  const fetchData = async () => {
    const top = await axios.get(
      "https://hacker-news.firebaseio.com/v0/" + kindOfStories + ".json"
    );
    setStories(top.data);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kindOfStories]);

  const handleKindOfStoryChange = (kind: string) => {
    setKindOfStories(kind);
    setAmountToShow(10);
  };

  return (
    <div>
      <div className={"buttonContainer"}>
        <BasicButton onClick={() => handleKindOfStoryChange("topstories")}>
          Top stories
        </BasicButton>
        <BasicButton onClick={() => handleKindOfStoryChange("beststories")}>
          Best stories
        </BasicButton>
        <BasicButton onClick={() => handleKindOfStoryChange("newstories")}>
          New stories
        </BasicButton>
      </div>
      <div>
        {stories != null &&
          stories
            .slice(0, amountToShow)
            .map((story: number) => <Story key={story} story={story} />)}
      </div>
      <BasicButton onClick={() => setAmountToShow(amountToShow + 10)}>
        Load more
      </BasicButton>
    </div>
  );
}
