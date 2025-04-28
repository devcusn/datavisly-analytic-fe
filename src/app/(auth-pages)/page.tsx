import Image from "next/image";

import AppImage from "@/assets/img/app.png";

export default function Home() {
  return (
    <div>
      <div className="text-5xl font-bold max-w-4xl mx-auto text-center mt-20 text-white">
        Easy to use and privacy-friendly Google Analytics alternative
      </div>
      <div className="text-lg max-w-4xl mx-auto text-center mt-10 text-white">
        Fast, privacy-first website analytics. Track pageviews, visitor sources,
        browser and device types — no cookies, no intrusive tracking. Simple
        insights with zero impact on your website speed.
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <Image src={AppImage} alt={""} />
      </div>
    </div>
  );
}
