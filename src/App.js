import React, { useEffect, useState } from 'react'
import { Footer, NavInShort, NewsContent } from './components';
import axios from 'axios';


const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResutls, setNewsResutls] = useState('');
  const [loadMore, setLoadMore] = useState(10);

  const newsApi = async () => {
    try {

      const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e989f4a93cb24525a6b9224f12bf7323&category=${category}&pageSize=${loadMore}`;
      const news = await axios.get(URL)
      setNewsArray(news.data.articles);
      setNewsResutls(news.data.totalResults);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, newsResutls, loadMore])



  return (
    <div>
      <NavInShort setCategory={setCategory} />

      <NewsContent
        category={category}
        newsArray={newsArray}
        newsResutls={newsResutls}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />

      <Footer />
    </div>
  )
}

export default App
