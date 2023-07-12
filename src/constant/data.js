export const navLogo = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

export const appStore = "https://assets.inshorts.com/website_assets/images/appstore.png";
export const playStore = "https://assets.inshorts.com/website_assets/images/playstore.png"



export const defaultImg =
  'http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png';



export const formatDate = (publishedAt) => {
  const fulldate = new Date(publishedAt);
  const [day, month, date, year, time] = fulldate.toString().split(' ');
  const hour = parseInt(time.substring(0, 2));
  const isPM = hour > 12;
  const formattedHour = (hour - 12).toString().padStart(2, '0');
  const formattedMinutes = time.substring(3, 5);
  const formattedDate = `${date} ${month} ${year}, ${day}`;
  const formattedTime = `${formattedHour}:${formattedMinutes} ${isPM ? 'pm' : 'am'
    }`;

  return {
    formattedDate,
    formattedTime,
  };
};