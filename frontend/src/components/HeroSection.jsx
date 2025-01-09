import { setSearchedQuery } from "@/redux/jobSlice";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 py-2">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          The Leading Platform for Job Opportunities
        </span>
        <h1 className="text-5xl font-bold">
          Discover, Apply & <br /> Secure Your{" "}
          {/* <span className="text-[#6A38C2]">Ideal Career</span> */}
          <span className="text-[#275DF5]">Ideal Career</span>
        </h1>
        <p>
          Discover and apply for the best career opportunities that align with
          your skills, aspirations, and values. Start your journey towards a
          fulfilling career today!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Search for career opportunities"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full bg-transparent"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#F83002] hover:bg-[#275DF5]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
