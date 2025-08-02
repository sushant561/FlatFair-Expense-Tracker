import "./FeaturesSection.css";

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: "/images/group-45.png",
      iconWidth: "33.16px",
      iconHeight: "32px",
      label: "Track",
      alt: "Track icon",
    },
    {
      icon: "/images/vector.svg",
      iconWidth: "32px",
      iconHeight: "32px",
      label: "Share",
      alt: "Share icon",
    },
    {
      icon: "/images/vector-2.svg",
      iconWidth: "30.4px",
      iconHeight: "32px",
      label: "Settle",
      alt: "Settle icon",
    },
    {
      icon: "/images/vector-1.svg",
      iconWidth: "21.03px",
      iconHeight: "32px",
      label: "Split",
      alt: "Split icon",
    },
    {
      icon: "/images/group-46.png",
      iconWidth: "55.81px",
      iconHeight: "32px",
      label: "Balance",
      alt: "Balance icon",
    },
    {
      icon: "/images/group-45.png",
      iconWidth: "33.16px",
      iconHeight: "32px",
      label: "Analyze",
      alt: "Analyze icon",
    },
    {
      icon: "/images/vector.svg",
      iconWidth: "32px",
      iconHeight: "32px",
      label: "Report",
      alt: "Report icon",
    },
  ];

  const FeatureItem = ({ feature }: { feature: typeof features[0] }) => (
    <div className="feature-item">
      <img
        className="relative h-8"
        style={{ width: feature.iconWidth }}
        alt={feature.alt}
        src={feature.icon}
      />
      <span className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-blue-gray400 text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
        {feature.label}
      </span>
    </div>
  );

  return (
    <section className="bg-blue-gray100 w-full py-3">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center gap-20 px-20">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>

      {/* Mobile View with Scrolling */}
      <div className="md:hidden scroll-container">
        <div className="scroll-content">
          {/* First set of features */}
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
          {/* Duplicate set for seamless scrolling */}
          {features.map((feature, index) => (
            <FeatureItem key={`duplicate-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
