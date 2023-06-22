import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export const Notification = () => {
  return (
    <div>
      <FontAwesomeIcon className="text-blue-500 content-none" icon={faBell} />
    </div>
  );
};
