import Link from "next/link";
import { useEffect, useState } from "react";

interface NewsData {
  [k: string]: string | number | boolean;
  web_url: string;
  _id: string;
}
export const NewsFeedNewYorkTimes = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/archive/v1/2023/1.json?api-key=${process.env.NEW_YORK_API_KEY}`,
        {
          method: "GET",
        }
      );
      if (!res) {
        throw new Error("Failed to fetch data");
      }
      return res;
    };
    fetchNews()
      .then((r) => r.json())
      .then((list) => setNews(list.response.docs))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log({ news });
  return (
    <div className="bg-white p-4 rounded text-left shadow-md relative w-2/6 pt-10">
      <ul>
        {news.length
          ? news.map(({ web_url, abstract, _id }, index) => {
              return (
                <li key={_id}>
                  <Link href={web_url}>{abstract}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
