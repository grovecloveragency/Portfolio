import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-1 lg:hidden bg-black text-white font-unbounded pt-6 pb-2 py-6 mt-14">
      <h1 className="relative text-[2rem] tracking-wide uppercase font-bold font-heimdal">
        Grove
        <sup className="absolute top-0 text-[8px] px-1 py-2 rounded-[100%] font-unbounded">
          TM
        </sup>
      </h1>
      <div className="flex justify-center items-center gap-x-8">
        <Link href="https://github.com/grovecloveragency?tab=repositories">
          <GitHubLogoIcon className="w-4 h-4 stroke-[1]" />
        </Link>
        <Link href="https://www.linkedin.com/in/groven-builds-251ba4330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <LinkedInLogoIcon className="w-4 h-4 stroke-[1]" />
        </Link>
        <Link href="https://www.instagram.com/groven_builds/profilecard/?igsh=dDQycnA3aGY4bTU5">
          <InstagramLogoIcon className="w-4 h-4 stroke-[1]" />
        </Link>
       
      </div>
      <p className="text-[8px] capitalize mt-4 text-center">
        Kondhwa Khurd, Pune - 411048, Pune, maharashtra, India
      </p>
    </div>
  );
};

export default MobileFooter;
