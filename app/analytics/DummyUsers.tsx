import Image from "next/image";

interface User {
  username: string;
  id: number;
  image: string;
}

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
}

export const DummyUsers = async () => {
  const data = await getData();
  console.log({ data });
  return (
    <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative dark:bg-neutral-600 dark:text-gray-300">
      <h4 className="text-sm text-gray-400 pb-2">Top Sales</h4>
      <ul>
        {data?.users &&
          data.users.slice(0, 8).map(({ username, id, image }: User) => {
            return (
              <li key={id} className="flex gap-2 items-center justify-start">
                <Image
                  className="rounded-lg"
                  src={image}
                  width={50}
                  height={50}
                  alt={username}
                />
                <div>{username}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
