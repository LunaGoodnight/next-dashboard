import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserPanel = () => {
  return (
    <div className="group">
      <FontAwesomeIcon className="text-[#adb4d2]-500" icon={faCircleUser} />
      <div className="hidden group-hover:block w-6 h-8 bg-emerald-300 absolute top-3 right-0">
        adfadfasfd{" "}
      </div>
    </div>
  );
};
