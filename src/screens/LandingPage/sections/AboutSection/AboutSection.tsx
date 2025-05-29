import { Button } from "../../../../components/ui/button";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-[119px] py-12 md:py-20 px-6 md:px-20 bg-blue-gray900 w-full">
      <div className="flex flex-col items-start justify-center gap-6 flex-1 text-center md:text-left order-2 md:order-1">
        <div className="flex-col items-start gap-6 flex w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h4 className="font-heading-2 text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[1.6] md:leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] font-[number:var(--heading-2-font-weight)] text-2xl md:text-4xl">
              Sushant Bhagat, passionate about building smart, helpful web
              tools.
            </h4>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <Button
              variant="outline"
              className="group p-4 rounded-lg border-2 border-solid border-white bg-transparent hover:bg-white transition-colors w-full md:w-auto"
              onClick={() => window.open('https://sushantbhagat.vercel.app/', '_blank')}
            >
              <span className="font-button-l text-white text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] [font-style:var(--button-l-font-style)] font-[number:var(--button-l-font-weight)] whitespace-nowrap group-hover:text-blue-gray900 transition-colors">
                View Portfolio →
              </span>
            </Button>
          </div>
        </div>
      </div>

      <img
        className="w-[250px] md:w-[363px] h-auto md:h-[544px] object-cover order-1 md:order-2 mb-8 md:mb-0"
        alt="Sushant Bhagat portrait"
        src="/images/1000008807-removebg-1.png"
      />
    </section>
  );
};
