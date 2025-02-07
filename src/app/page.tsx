import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full max-w-[1200px] mx-auto h-screen items-center flex justify-center ">
        <Carousel className="mt-[-80px] flex mx-auto w-[80%] h-full items-center justify-center ">
          <CarouselContent className=" flex w-full h-full">
            <CarouselItem className=" flex justify-center">...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
