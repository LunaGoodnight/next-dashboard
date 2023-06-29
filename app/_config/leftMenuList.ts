import {
  faChartBar,
  faCalendarDays,
  faAddressBook,
  faMap,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTimeline,
  faCartShopping,
  faChartPie,
  faWandMagicSparkles,
  faShareNodes,
  faEnvelope,
  faCalendarCheck,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export const leftMenuList = [
  { name: "Dashboard", icon: faChartBar, path: "/" },
  { name: "Analytics", icon: faMap, path: "/analytics" },
  { name: "Calendar", icon: faCalendarDays, path: "/" },
  { name: "CRM", icon: faChartBar, path: "/" },
  { name: "E commerce", icon: faCartShopping, path: "/" },
  { name: "Management", icon: faTimeline, path: "/" },
  { name: "Chat", icon: faChartPie, path: "/" },
  { name: "Plugins", icon: faWandMagicSparkles, path: "/" },
  { name: "Social", icon: faShareNodes, path: "/" },
  { name: "Email", icon: faEnvelope, path: "/" },
  { name: "Events", icon: faCalendarCheck, path: "/" },
  { name: "Profile", icon: faAddressBook, path: "/" },
  { name: "Faq", icon: faCircleInfo, path: "/" },
];
