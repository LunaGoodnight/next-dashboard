import { numberData } from "@/src/config/numberData";
import { calculatePercentageChange } from "@/src/utils/calculatePercentageChange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NumberDataSection = () => {
  return (
    <div className="grid gap-4 grid-cols-2 w-2/4">
      {numberData.map(
        ({
          title,
          iconColor,
          lastMonth,
          icon,
          thisMonth,
          iconBackground,
          isMoney,
        }) => {
          const { isIncrease, percentage } = calculatePercentageChange(
            lastMonth,
            thisMonth
          );
          return (
            <div
              key={title}
              className="bg-white p-4 rounded text-left shadow-md relative"
            >
              <div className="flex items-start justify-between">
                <h4 className="text-sm text-gray-400">{title}</h4>
                <div
                  className={`${iconBackground} ${iconColor} rounded w-6 h-6 flex items-center justify-center text-center text-sm`}
                >
                  <FontAwesomeIcon icon={icon} />
                </div>
              </div>
              <div className="text-2xl font-bold pt-3">
                {isMoney && "$ "}
                {thisMonth}
              </div>
              <div className="text-xs flex gap-2 absolute bottom-4">
                <i
                  className={`${
                    isIncrease
                      ? "text-sky-400 after:content-['↗']"
                      : "text-red-400 after:content-['↘']"
                  } font-bold`}
                />
                <span>
                  {isIncrease ? "+" : "-"} {percentage}%
                </span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
