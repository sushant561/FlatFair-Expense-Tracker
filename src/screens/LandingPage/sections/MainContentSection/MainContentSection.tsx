import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import "./MainContentSection.css";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-12 px-0 md:pl-20 md:pr-12 pt-20 pb-0 md:pb-12 relative w-full bg-[#8B1D2C] min-h-screen overflow-hidden">
      <div className="flex flex-col items-start justify-center gap-6 relative flex-1 self-stretch w-full md:max-w-[50%] px-6 md:px-0 order-2 md:order-1 pb-12 md:pb-0">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-heading-1-m font-[number:var(--heading-1-m-font-weight)] text-white text-[length:var(--heading-1-m-font-size)] tracking-[var(--heading-1-m-letter-spacing)] leading-[1.4] md:leading-[var(--heading-1-m-line-height)] [font-style:var(--heading-1-m-font-style)] text-sm md:text-5xl font-bold">
              Manage Daily Expenses With Your Flatmates.
            </h1>
          </div>

          <p className="relative self-stretch font-body-l font-[number:var(--body-l-font-weight)] text-white text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[1.6] md:leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)] text-lg md:text-xl">
            Easily log daily expenses, track who paid what, and settle up with
            your flatmates at month&apos;s end.
          </p>

          <div className="inline-flex items-center gap-4 relative w-full md:w-auto justify-center md:justify-start">
            <Button
              className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-lg border-2 border-solid border-[#2563eb] w-full md:w-auto"
              variant="default"
            >
              <span className="inline-flex items-center justify-center px-4 py-0 relative">
                <span className="relative w-fit mt-[-1.00px] font-button-m font-[number:var(--button-m-font-weight)] text-white text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]">
                  Get Started
                </span>
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-[45%] flex items-end justify-center px-0 md:px-0 order-1 md:order-2 md:items-center">
        <img
          className="relative w-full md:w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain md:rounded-lg transform md:scale-110 md:translate-x-8"
          alt="Flatmates managing expenses together"
          src="/images/file-0000000098ac61f9a837ee49e8fba932-1.png"
        />
      </div>
    </section>
  );
};
