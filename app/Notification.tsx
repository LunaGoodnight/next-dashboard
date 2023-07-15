import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export const Notification = () => {
  return (
    <div className="relative p-2 px-4 cursor-pointer rounded dark:hover:bg-gray-500 hover:bg-gray-100">
      <span className="flex absolute h-3 w-3 top-2 right-3 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faBell} />
    </div>
  );
};
