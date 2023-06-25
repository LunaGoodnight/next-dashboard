import {
  faMoneyBill1,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export const numberData = [
  {
    title: "Sales",
    thisMonth: 52168,
    icon: faMoneyBill1,
    iconBackground: "bg-amber-400",
    // iconColor: "text-[#8b939f]",
    iconColor: "text-white",
    lastMonth: 43854,
    isMoney: true,
  },
  {
    title: "New Member",
    thisMonth: 336,
    icon: faUser,
    iconBackground: "bg-indigo-200",
    iconColor: "text-white",

    lastMonth: 423,
    isMoney: false,
  },
  {
    title: "Total Expenses",
    thisMonth: 1200.0,
    icon: faCreditCard,
    iconBackground: "bg-blue-200",
    iconColor: "text-white",
    lastMonth: 1123.25,
    isMoney: false,
  },
  {
    title: "Orders",
    thisMonth: 36894,
    icon: faPenToSquare,
    iconBackground: "bg-emerald-200",
    iconColor: "text-white",
    lastMonth: 32844,
    isMoney: false,
  },
];
