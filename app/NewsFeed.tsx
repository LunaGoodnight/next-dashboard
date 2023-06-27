import { useEffect, useState } from "react";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("x-api-key", process.env.NEWS_API_KEY as string);

export const NewsFeed = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://api.newscatcherapi.com/v2/search?q=fintech",
        {
          method: "GET",
          headers: requestHeaders,
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res;
    };
    fetchNews()
      .then((r) => r.json())
      .then((list) => setNews(list))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log({ news });
  return <div></div>;
};
