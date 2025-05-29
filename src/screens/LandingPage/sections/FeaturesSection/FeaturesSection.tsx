import React from "react";

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
  ];

  return (
    <section className="flex items-center justify-center gap-20 px-20 py-12 bg-blue-gray100 w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-center gap-2"
        >
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
      ))}
    </section>
  );
};
