import { SideBar } from "./SideBar";
import { Listing } from "./Listing";
import DashBoard from "./DashBoard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const ListingWrapper = () => {
  const mode = useSelector((state: RootState) => state.carSlice.mode);
  return (
    <div className="flex w-full h-screen ">
      <SideBar />
      {mode === "booking" ? <Listing /> : <DashBoard />}
    </div>
  );
};

export default ListingWrapper;
