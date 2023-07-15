import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserPanel = () => {
  return (
    <div className="group relative">
      <div className="p-2 cursor-pointer">
        <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faCircleUser} />
      </div>
      <ul className="hidden group-hover:block bg-gray-50 dark:bg-neutral-800 absolute top-11 right-0 rounded z-10 min-w-[180px]">
        <li className="p-2 border-b-2 border-b-gray-300 dark:border-b-gray-600 w-full">
          Profile
        </li>
        <li className="p-2 border-b-2 border-b-gray-300 dark:border-b-gray-600 w-full">
          Settings
        </li>
        <li className="p-2 w-full">Logout</li>
      </ul>
    </div>
  );
};
