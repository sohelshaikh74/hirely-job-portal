import Job from "./Job";
import Navbar from "./shared/Navbar";

const randomjobs = [1, 2, 3];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Result ({randomjobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomjobs.map((item, index) => (
            <Job key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
