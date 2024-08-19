import { Carousel } from "./_components/Divs/Carousel";
import { FirstDiv } from "./_components/Divs/FirstDiv";
import PopularAndNewProducts from "./_components/Divs/PopularAndNewProducts";
import HomePageTransition from "./transition";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <FirstDiv />
      </div>
      <HomePageTransition>
        <div>
          <Carousel />
        </div>
        <div>
          <PopularAndNewProducts />
        </div>
      </HomePageTransition>
      <div className="mt-10">Footer Here</div>
    </div>
  );
}
