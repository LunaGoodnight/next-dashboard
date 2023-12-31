import Link from "next/link";
import { useEffect, useState } from "react";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("x-api-key", process.env.NEWS_API_KEY as string);

interface NewsData {
  [k: string]: string | number | boolean;
  link: string;
}
export const NewsFeed = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://api.miounewscatcherapi.com/v2/search?q=fintech",
        {
          method: "GET",
          headers: requestHeaders,
        }
      );
      if (!res) {
        throw new Error("Failed to fetch data");
      }
      return res;
    };
    fetchNews()
      .then((r) => r.json())
      .then((list) => setNews(list.articles))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log({ news });
  return (
    <div className="bg-white p-4 rounded text-left shadow-md relative w-2/6 pt-10">
      <ul>
        {news.length
          ? news.map(({ link, title }, index) => {
              return (
                <li key={index}>
                  <Link href={link}>{title}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
