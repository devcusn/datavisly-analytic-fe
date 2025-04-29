import Image from "next/image";

import AppImage from "@/assets/img/app.png";
import Link from "next/link";

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
      {/* CTA Banner */}
      <div className="max-w-4xl mt-20 mx-auto bg-gray-800 rounded-md p-8 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Want these stats for your website?
          </h2>
          <h3 className="text-2xl font-bold text-orange-600">
            Start your free trial today.
          </h3>
        </div>
        <div className="flex space-x-4">
          <Link
            href={"/sign-up"}
            className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-md"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
