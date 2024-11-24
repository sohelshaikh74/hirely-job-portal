// import { setAllAdminJobs } from "@/redux/jobSlice";
// import { JOB_API_END_POINT } from "@/utils/constant";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// const useGetAllAdminJobs = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchAllAdminJobs = async () => {
//       try {
//         const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
//           withCredentials: true,
//         });
//         if (res.data.success) {
//           dispatch(setAllAdminJobs(res.data.jobs));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchAllAdminJobs();
//   }, []);
// };

// export default useGetAllAdminJobs;

// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryCarousel from "./CategoryCarousel";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useGetAllJobs from "./hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  // const navigate = Navigate();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  console.log("hello");

  useEffect(() => {
    if (user?.role === "recruiter") navigate("/admin/companies");
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-[#FFFFFF]">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
