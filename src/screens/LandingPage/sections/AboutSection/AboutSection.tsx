
import { Button } from "../../../../components/ui/button";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex items-center gap-[119px] py-20 px-20 bg-blue-gray900 w-full">
      <div className="flex flex-col items-start justify-center gap-6 flex-1">
        <div className="flex-col items-start gap-6 flex w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="font-heading-2 text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] font-[number:var(--heading-2-font-weight)]">
              Sushant Bhagat, passionate about building smart, helpful web
              tools.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="p-4 rounded-lg border-2 border-solid border-white bg-transparent hover:bg-white hover:text-blue-gray900 transition-colors"
            >
              <span className="font-button-l text-white text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] [font-style:var(--button-l-font-style)] font-[number:var(--button-l-font-weight)] whitespace-nowrap group-hover:text-blue-gray900">
                Contact me →
              </span>
            </Button>
          </div>
        </div>
      </div>

      <img
        className="w-[363px] h-[544px] object-cover"
        alt="Sushant Bhagat portrait"
        src="/images/1000008807-removebg-1.png"
      />
    </section>
  );
};
