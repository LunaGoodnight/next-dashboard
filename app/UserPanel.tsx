import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserPanel = () => {
  return (
    <div className="group relative">
      <div className="p-2 px-4 cursor-pointer rounded dark:hover:bg-gray-500 hover:bg-gray-100">
        <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faCircleUser} />
      </div>
      <ul className="text-sm hidden group-hover:block bg-gray-50 dark:bg-neutral-800 absolute top-10 right-0 rounded z-10 min-w-[180px] shadow-md border-2 border-gray-200">
        <li className="p-2 border border-b-gray-300 dark:border-b-gray-600 w-full">
          Profile
        </li>
        <li className="p-2 border border-b-gray-300 dark:border-b-gray-600 w-full">
          Settings
        </li>
        <li className="p-2 w-full">Logout</li>
      </ul>
    </div>
  );
};
