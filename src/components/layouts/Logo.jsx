import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 group">
      <div className="relative">
        <Image
          alt="kidz-zone-logo"
          src={"/assets/logo.png"}
          width={50}
          height={40}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h2 className="text-2xl font-black tracking-tight hidden sm:block">
        Kidz <span className="text-primary">Zone</span>
      </h2>
    </Link>
  );
};

export default Logo;
