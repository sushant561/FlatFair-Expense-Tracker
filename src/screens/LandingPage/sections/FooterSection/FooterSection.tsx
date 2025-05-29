import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start justify-center px-6 md:px-20 py-0 relative bg-white">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pt-12 pb-6 px-0 relative self-stretch w-full">
        <div className="relative flex-1 font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray600 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)] text-center md:text-left">
          @ 2025 Sushant Bhagat. All rights reserved.
        </div>

        <div className="inline-flex items-center gap-4 relative">
          <a href="https://x.com/Sushant1864?t=fpTMozzWfvjxSepq9Yz10w&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon className="w-6 h-6 text-blue-gray600 hover:text-blue-600 transition-colors" />
          </a>

          <a href="https://www.linkedin.com/in/sushant-bhagat-9a3587329" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="w-6 h-6 text-blue-gray600 hover:text-blue-600 transition-colors" />
          </a>

          <a href="https://github.com/sushant561" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon className="w-6 h-6 text-blue-gray600 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>

      <Separator className="bg-blue-gray200 w-full" />

      <div className="flex items-start gap-2.5 pt-6 pb-12 px-0 relative self-stretch w-full">
        <p className="relative flex-1 mt-[-1.00px] font-body-XS font-[number:var(--body-XS-font-weight)] text-blue-gray600 text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] [font-style:var(--body-XS-font-style)] text-center md:text-left text-sm md:text-base">
          I&#39;m Sushant Bhagat, a passionate developer focused on building
          simple and useful web tools. This project helps flatmates manage and
          share monthly expenses easily. I enjoy solving real-life problems
          through clean design and practical solutions that make daily tasks
          easier for students and roommates living together in cities like
          Delhi.
        </p>
      </div>
    </footer>
  );
};
