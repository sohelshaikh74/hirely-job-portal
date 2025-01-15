import { useLocation } from "react-router-dom"; // Import useLocation hook
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false); // state to track scroll

  // UseLocation hook to track the current path
  const location = useLocation();

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // When scrolled more than 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className={`bg-white border-b sticky top-0 z-50 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/*  <div> */}
        <div className="flex items-center">
          {/* <img
            src={assets.h_logo}
            alt="Hirely Logo"
            style={{ width: "40px", height: "40px" }}
            className=""
          /> */}
          <h1
            className="text-2xl font-bold cursor-pointer text-[#275DF5]"
            onClick={() => navigate("/")}
          >
            Hire
            {/* Hire<span className="text-[#f83002]">ly</span> */}
            <span className="text-[#f83002]">Ly</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className={
                      location.pathname === "/admin/companies" ? "active" : ""
                    }
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className={
                      location.pathname === "/admin/jobs" ? "active" : ""
                    }
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className={location.pathname === "/jobs" ? "active" : ""}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className={location.pathname === "/browse" ? "active" : ""}
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myjobs"
                    className={location.pathname === "/myjobs" ? "active" : ""}
                  >
                    My Jobs
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="border border-[#481c94]">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#f83002] hover:bg-[#f82f02dd]">
                  Sing Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="rounded-full w-[40px]"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 rounded-lg shadow-lg bg-white border border-gray-100 transform transition-all duration-200 mt-1">
                <div className="flex gap-2  items-center">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                      className="rounded-full w-[50px]"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground profile-bio">
                      {user?.profile?.bio}{" "}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2 text-gray-500">
                  {user && user.role === "student" ? (
                    <>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
