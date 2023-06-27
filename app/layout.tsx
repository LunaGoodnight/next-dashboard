import { HideMenuButton } from "@/app/HideMenuButton";
import { Notification } from "@/app/Notification";
import ThemeProviders from "@/app/ThemeProviders";
import { SearchBlock } from "@/app/SearchBlock";
import { SideBar } from "@/app/SideBar";
import { SideBarContextProvider } from "@/app/SideBarContextProvider";
import { ThemeButton } from "@/app/ThemeButton";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const GTM_ID = "GTM-W7FMR2M";

config.autoAddCss = false;

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Dashboard",
  description: "Dashboard wrote in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={`${inter.className}  bg-[#f6f9ff] overflow-hidden `}>
        <ThemeProviders>
          <SideBarContextProvider>
            <div className="text-[#7b8190]">
              <header className="flex w-full justify-between bg-white fixed top-0 z-20">
                <div className="p-5 w-full flex justify-between dark:bg-neutral-600 shadow-md">
                  <div className="flex justify-between items-center w-2/12">
                    <div className="font-bold text-indigo-900 text-3xl dark:text-yellow-300">
                      LunaAdmin
                    </div>
                    <HideMenuButton />
                  </div>
                  <nav className="flex gap-5 items-center">
                    <SearchBlock />
                    <ThemeButton />
                    <Notification />
                    <FontAwesomeIcon
                      className="text-[#adb4d2]-500"
                      icon={faCircleUser}
                    />
                  </nav>
                </div>
              </header>
              <div className="flex w-full min-h-screen">
                <SideBar />
                {children}
              </div>
            </div>
          </SideBarContextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
