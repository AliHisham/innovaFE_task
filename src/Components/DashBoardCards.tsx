import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  value: number;
  name: string;
  maxValue: number;
};

const DashBoardCards = ({ maxValue, name, value }: Props) => {
  return (
    <div className="flex flex-col justify-center text-center bg-white rounded-md px-14 py-5 gap-7 m-3">
      <div className="text-gray-900 font-sans text-lg font-bold">{name}</div>
      <div className="w-40 h-40">
        <CircularProgressbar
          maxValue={maxValue}
          text={`${value}%`}
          value={value}
        ></CircularProgressbar>
      </div>
    </div>
  );
};

export default DashBoardCards;
