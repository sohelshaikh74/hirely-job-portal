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
