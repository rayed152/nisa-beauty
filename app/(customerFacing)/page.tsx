import { Carousel } from "./_components/Divs/Carousel";
import { FirstDiv } from "./_components/Divs/FirstDiv";

export default function HomePage() {
  return (
    <div className="h-screen">
      <div>
        <FirstDiv />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
