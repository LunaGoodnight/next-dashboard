import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export const Notification = () => {
  return (
    <div className="relative">
      <div className="bg-green-400 w-[8px] h-[8px] absolute rounded-lg border-solid border-2 border-white right-0" />
      <FontAwesomeIcon className="text-blue-500" icon={faBell} />
    </div>
  );
};
