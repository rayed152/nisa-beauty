import { Suspense } from "react";
import { Carousel } from "./_components/Divs/Carousel";
import { FirstDiv } from "./_components/Divs/FirstDiv";

export default function HomePage() {
  return (
    <div className="">
      <div>
        <FirstDiv />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="mt-10">Footer Here</div>
    </div>
  );
}
