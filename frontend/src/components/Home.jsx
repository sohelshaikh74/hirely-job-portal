// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CategoryCarousel from "./CategoryCarousel";
import HeroSection from "./HeroSection";
import useGetAllJobs from "./hooks/useGetAllJobs";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

const Home = () => {
  // useGetAllJobs();
  // const navigate = Navigate();
  // const { user } = useSelector((store) => store.auth);
  // useEffect(() => {
  //   if (user?.role === "recruiter") navigate("/admin/companies");
  // }, []);
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
