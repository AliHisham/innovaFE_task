import { useEffect } from "react";
import HeaderBar from "./HeaderBar";
import DashBoardCards from "./DashBoardCards";
import { getDashBoard } from "../services/carApis";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setDashBoard } from "../redux/carSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector(
    (state: RootState) => state.carSlice.dashBoard
  );
  useEffect(() => {
    getDashBoard()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(setDashBoard(res));
      });
  }, []);
  return (
    <div className="w-10/12 ml-auto">
      <HeaderBar />
      <div className="bg-gray-100 p-8 flex flex-col gap-3">
        <div className="flex-row flex flex-wrap">
          {dashboardData.length &&
            dashboardData.map((d, i) => {
              return <DashBoardCards key={i} {...d} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
