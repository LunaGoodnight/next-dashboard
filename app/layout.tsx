import "./globals.css";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Poppins } from "next/font/google";
import Providers from "@/app/Providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeButton } from "@/app/ThemeButton";
import { SearchBlock } from "@/app/SearchBlock";
import { Notification } from "@/app/Notification";
import { leftMenuList } from "@/app/_config/leftMenuList";
config.autoAddCss = false;

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className="text-[#7b8190]">
            <div className="flex w-full justify-between bg-white">
              <div className="p-6 w-full flex justify-between dark:bg-neutral-600 shadow-md">
                <div className="flex justify-between items-center w-52">
                  <div className="font-bold text-indigo-900 text-3xl dark:text-yellow-300">
                    LunaAdmin
                  </div>
                  <FontAwesomeIcon
                    className="text-indigo dark:text-yellow-300"
                    icon={faBars}
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <SearchBlock />
                  <ThemeButton />
                  <Notification />
                  <FontAwesomeIcon
                    className="text-blue-500"
                    icon={faCircleUser}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <ul className="flex w-60 flex-col shadow-md absolute left-0 h-max p-2">
                {leftMenuList.map(({ name, icon }) => {
                  return (
                    <li key={name}>
                      <Link href={name} className="flex gap-2.5 p-3">
                        <div>
                          <FontAwesomeIcon
                            className="text-[#adb4d2]-500"
                            icon={icon}
                          />
                        </div>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
