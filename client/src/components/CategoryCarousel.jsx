import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { setSearchQuery } from "@/redux/jobSlice"; // Add this import

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Fullstack Developer",
  "AI-ML",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full py-6 md:py-8 px-2 md:px-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
      >
        <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-4">
          {category.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:pl-2 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex aspect-square items-center justify-center p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300 rounded-lg">
                    <Button
                      onClick={() => searchJobHandler(item)}
                      className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 bg-white hover:bg-blue-50 border border-blue-200"
                    >
                      {item}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
