import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Story.css';
import {
  LoadingSpinner,
  StoryDiv,
  TitleP,
} from '../../common/styled-components/Wrappers';

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

  useEffect(() => {
    const fetchStory = async () => {
      const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/item/' + story + '.json'
      );
      setFullStory(response.data);
    };

    fetchStory();
  }, [story]);

  return (
    <StoryDiv>
      {fullStory != null ? (
        <a target='_blank' href={fullStory.url} rel='noreferrer'>
          <TitleP>{fullStory.title}</TitleP>
          <p className={'by'}> by: {fullStory.by}</p>
        </a>
      ) : (
        <LoadingSpinner />
      )}
    </StoryDiv>
  );
}
