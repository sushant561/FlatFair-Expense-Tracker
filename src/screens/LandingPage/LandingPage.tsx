import { AboutSection } from "./sections/AboutSection";
import { ExpenseCalculatorSection } from "./sections/ExpenseCalculatorSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <HeaderSection />
      <MainContentSection />
      <FeaturesSection />
      <ExpenseCalculatorSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};
