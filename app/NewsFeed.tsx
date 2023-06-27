"use server";
export async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=fintech&from=2023-06-01&apiKey=d0333c98698e4f6b818186a29bf10625`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const NewsFeed = async () => {
  const data = await getData();
  return <div>afasdf</div>;
};
