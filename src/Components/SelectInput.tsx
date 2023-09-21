import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  filterAllCars,
  setCarTypeFilter,
  setTransmissionTypeFilter,
} from "../redux/carSlice";
type filter = {
  type: string;
};
type Props = {
  data: filter[];
  filterType: string;
};
const SelectInput = ({ data, filterType }: Props) => {
  const dispatch = useDispatch();
  const filerTypeRef = useRef<HTMLSelectElement>(null);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (filterType === "carType") {
      dispatch(
        setCarTypeFilter({
          type: event.target.value === "Car Type" ? "" : event.target.value,
        })
      );
      dispatch(filterAllCars({ carType: event.target.value }));
    } else {
      dispatch(
        setTransmissionTypeFilter({
          type:
            event.target.value === "Transmission Type"
              ? ""
              : event.target.value,
        })
      );
      dispatch(filterAllCars({ carType: event.target.value }));
    }
  };
  return (
    <div className="relative">
      <select
        ref={filerTypeRef}
        onChange={handleChange}
        className="rounded-3xl px-5 py-2.5 appearance-none w-52 focus:outline-none "
      >
        <option
          value={filterType === "carType" ? "Car Type" : "Transmission Type"}
        >
          {filterType === "carType" ? "Car Type" : "Transmission Type"}
        </option>
        {data.map((d) => {
          return <option value={d.type}>{d.type}</option>;
        })}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9142 8C18.4592 8 18.7622 8.63046 18.4218 9.05605L12.8408 16.0322C12.5806 16.3575 12.0859 16.3575 11.8257 16.0322L6.24478 9.05605C5.9043 8.63046 6.20731 8 6.75234 8L17.9142 8Z"
            fill="#B4B4C6"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;
