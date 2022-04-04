import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Story.css";

export type StoryProps = {
  story: number;
};

export interface FullStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

export default function Story({ story }: StoryProps) {
  const [fullStory, setFullStory] = useState<FullStory | null>(null);

  const fetchStory = async () => {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/item/" + story + ".json"
    );
    setFullStory(response.data);
  };

  useEffect(() => {
    fetchStory();
  }, [story]);

  return (
    <div>
      {fullStory != null && (
        <a href={fullStory.url}>
          <p className={"storyTitle"}>{fullStory.title}</p>
          <p className={"by"}> by: {fullStory.by}</p>
        </a>
      )}
    </div>
  );
}
