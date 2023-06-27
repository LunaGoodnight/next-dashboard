import Link from "next/link";

export const MockNewsFeed = () => {
  return (
    <div className="bg-white">
      <ul className="flex flex-col">
        <li>
          <Link href="https://thehackernews.com/2023/06/us-cybersecurity-agency-adds-6-flaws-to.html">
            <h4>
              U.S. Cybersecurity Agency Adds 6 Flaws to Known Exploited
              Vulnerabilities Catalog
            </h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};
