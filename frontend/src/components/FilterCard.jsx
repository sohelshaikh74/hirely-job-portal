// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const fitlerData = [
//   {
//     fitlerType: "Location",
//     array: ["Delhi NCR", "Bengaluru", "Hydrabad", "Pune", "Mumbai"],
//   },
//   {
//     fitlerType: "Industry",
//     array: [
//       "Frontend Developer",
//       "Backend Developer",
//       "FullStack Developer",
//       "Mern Stack Developer",
//     ],
//   },
//   {
//     fitlerType: "Salary",
//     array: ["0-40k", "41-60k", "60k to 1lakh"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useDispatch();
//   const changeHandler = (value) => {
//     setSelectedValue(value);
//   };
//   useEffect(() => {
//     dispatch(setSearchedQuery(selectedValue));
//   }, [selectedValue]);
//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <h1 className="font-bold text-lg">Filter Jobs</h1>
//       <hr className="mt-3" />
//       <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//         {fitlerData.map((data, index) => (
//           <div key={index}>
//             <h1 className="font-bold text-lg">{data.fitlerType}</h1>
//             {data.array.map((item, idx) => {
//               const itemId = `id${index}-${idx}`;
//               return (
//                 <div
//                   key={Math.random()}
//                   className="flex items-center space-x-2 my-2"
//                 >
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId}>{item}</Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;

// latest code
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setFilter, filterJobs } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "location",
    array: ["Delhi NCR", "Bengaluru", "Hydrabad", "Pune", "Mumbai"],
  },
  {
    filterType: "industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Mern Stack Developer",
    ],
  },
  {
    filterType: "salary",
    array: ["0-40k", "41-60k", "60k to 1lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (filterType, value) => {
    setSelectedValue(value);
    dispatch(setFilter({ filterType, value })); // Update the selected filter in Redux
    dispatch(filterJobs()); // Trigger job filtering based on new filters
  };

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index}>
          <h1 className="font-bold text-lg">{data.filterType}</h1>
          <RadioGroup
            value={selectedValue}
            onValueChange={(value) => changeHandler(data.filterType, value)}
          >
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
