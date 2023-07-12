import React from 'react';
import './NewsCard.css';

import { defaultImg, formatDate } from '../../constant/data';

const NewsCard = ({ newsItem }) => {
  const { title, url, urlToImage, author, description, source, publishedAt } =
    newsItem;

  const { formattedDate, formattedTime } = formatDate(publishedAt);

  return (
    <div className="newsCard">
      <img
        src={urlToImage ? urlToImage : defaultImg}
        alt={title}
        loading="lazy"
        className="newsCard__img"
      />
      <div className="newsCard__text">
        <div className="newCard__text-upper">
          <span className="newsCard__title">{title}</span>
          <br />
          <span className="newsCard__author">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <strong>short</strong>{' '}
            </a>
            <span className="newsCard__muted">
              by {author ? author : 'unknown'} / {formattedTime} on
              {formattedDate}
            </span>
          </span>
        </div>

        <div className="newsCard__text-lower">
          <div className="newsCard__description">
            {description ? description : 'No description available'}
          </div>
          <span className="newsCard__readmore">
            read more at{' '}
            <a href={url} target="_blank" rel="noopener noreferrer">
              <strong>{source.name}</strong>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

/* <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : 'http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1'
        }
        alt={newsItem.title}
        width={'100px'}
        height={100}
      />
*/

// const defalutImg =
//   'http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1';

/*
  // const fulldate = new Date(publishedAt);
  // var date = fulldate.toString().split(' ');
  // const hour = parseInt(date[4].substring(0, 2));
  // const time = hour > 12 ? true : false;

    // const fulldate = new Date(publishedAt);
  // const [day, month, date, year, time] = fulldate.toString().split(' ');
  // const hour = parseInt(time.substring(0, 2));
  // const isPM = hour > 12;
  // const formattedHour = (hour - 12).toString().padStart(2, '0');
  // const formattedMinutes = time.substring(3, 5);
  // const formattedDate = `${date} ${month} ${year}, ${day}`;
  // const formattedTime = `${formattedHour}:${formattedMinutes} ${
  //   isPM ? 'pm' : 'am'
  // }`;



by {author ? author : 'unknown'} /{' '}
    {time
      ? `${hour - 12} : ${date[4].substring(3, 5)} pm`
      : `${hour - 12} : ${date[4].substring(3, 5)} am`}{' '}
    on {date[2]} {date[1]} {date[3]}, {date[0]}
*/
