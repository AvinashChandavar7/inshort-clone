import React from 'react';
import './NewsContent.css';
import { Container } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';
import { appStore, playStore } from '../../constant/data';

const NewsContent = ({
  category,
  newsArray,
  newsResutls,
  loadMore,
  setLoadMore,
}) => {
  return (
    <Container maxWidth="md">
      <div className="newscontent__content">
        <div className="newcontent__content-downloads">
          <span>
            For the best experience use <strong>inshorts</strong> app on your
            smartphone
          </span>
          <img src={appStore} alt="appstore" loading="lazy" />
          <img src={playStore} alt="playstore" loading="lazy" />
        </div>

        <span className="newscontent__content-category">
          <h3>Category : {category}</h3>
        </span>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResutls && (
          <button
            className="newscontent__content-button"
            onClick={() => setLoadMore(loadMore + 10)}
          >
            Load More
          </button>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
