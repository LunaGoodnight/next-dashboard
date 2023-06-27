export const newsList = [
  {
    title:
      "U.S. Cybersecurity Agency Adds 6 Flaws to Known Exploited Vulnerabilities Catalog",
    link: "https://thehackernews.com/2023/06/us-cybersecurity-agency-adds-6-flaws-to.html",
  },
  {
    title: "Tackling the cyber skills gap with AI",
    link: "https://www.theregister.com/2023/06/27/tackling_the_cyber_skills_gap/",
  },
  {
    title: "What Are The Cybersecurity Risks Of Online Streaming in Australia",
    link: "https://www.rebellionresearch.com/what-are-the-cybersecurity-risks-of-online-streaming-in-australia",
  },
  {
    title: "3,600 potential cyber security experts apply to government scheme",
    link: "https://www.computerweekly.com/news/366542782/3600-potential-cyber-security-experts-apply-to-government-scheme",
  },
  {
    title: "Travel scams: Cyber security travel advice",
    link: "https://www.nzherald.co.nz/travel/travel-scams-cyber-security-travel-advice/4YVDTPJF6FAYZMHM6IMT7AMYTU/",
  },
  {
    title: "UK government sees record numbers trying to get into cybersecurity",
    link: "https://www.neowin.net/news/uk-government-sees-record-numbers-trying-to-get-into-cybersecurity/",
  },
];

export const MockNewsFeed = () => {
  return (
    <div className="bg-white p-4 rounded text-left shadow-md relative w-2/6 pt-10">
      <h4 className="text-sm text-gray-400 absolute top-3">News Feed</h4>
      <button
        type="button"
        className="absolute right-3 top-3 text-sm rounded text-gray-500 cursor-pointer"
      >
        Edit
      </button>
      <ul className="flex flex-col p-4 text-sm marker:text-sky-400 list-disc pl-10">
        {newsList.map(({ title, link }) => {
          return (
            <li key={link}>
              <a
                className="hover:text-gray-700 py-2 block"
                target="_blank"
                href={link}
              >
                <h4>{title}</h4>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
