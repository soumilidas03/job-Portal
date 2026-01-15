import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@/components/ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Mumbai", "Pune", "Kolkata", "Delhi", "Bangalore", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: ["Frontend developer", "Backend developer", "Fullstack developer"],
  },
  {
    filterType: "Salary",
    array: ["0-10K", "50K-1lakh", "1lakh-5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-xl font-bold text-purple-900">Filters</h2>

      {filterData.map((filter) => (
        <div key={filter.filterType} className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            {filter.filterType}
          </h3>

          <RadioGroup>
            {filter.array.map((item) => (
              <div
                key={item}
                className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
              >
                <RadioGroupItem value={item} id={item} />
                <Label
                  htmlFor={item}
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                >
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
