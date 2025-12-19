import Image from "next/image";
import { fontBangla } from "../../app/layout";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h2>
        <p>Buy Every toy with upto 15% discount</p>
        <button className="btn btn-outline btn-primary">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image
          alt="Buy Every toy with 15% discount"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
