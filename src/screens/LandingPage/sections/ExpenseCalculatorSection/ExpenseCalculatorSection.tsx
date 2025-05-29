import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the calculator card data for mapping
const calculatorCards = [
  {
    id: 1,
    title: "Calculate for 4 people",
    description:
      "Easily split expenses among four roommates and get instant analysis.",
    image: "..//picture.png",
    badge: {
      text: "Featured",
      className: "bg-purple-100 text-purple-800",
    },
  },
  {
    id: 2,
    title: "Calculate for 3 people",
    description: "Manage shared costs for three and see who owes whom.",
    image: "..//picture-1.png",
    badge: {
      text: "New",
      className: "bg-green-100 text-green-800",
    },
  },
  {
    id: 3,
    title: "Calculate for 2 people",
    description:
      "Quickly balance spending between two and settle amounts fairly.",
    image: "..//picture-2.png",
    badge: {
      text: "Coming Soon",
      className: "bg-yellow-100 text-yellow-800",
    },
  },
];

export const ExpenseCalculatorSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-20 bg-white w-full">
      <header className="flex items-center gap-6 w-full">
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="w-full font-heading-4 text-blue-gray900 text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)]">
              Manage
            </h2>
          </div>
        </div>
      </header>

      <div className="flex items-start gap-6 w-full">
        {calculatorCards.map((card) => (
          <Card key={card.id} className="flex-1 border-none">
            <div className="relative">
              <div
                className="w-full h-[220px] rounded-[5px] bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <Badge
                className={`absolute top-4 left-4 px-2 py-1 font-body-s text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] ${card.badge.className}`}
              >
                {card.badge.text}
              </Badge>
            </div>
            <CardContent className="flex flex-col items-start gap-2 pt-6 pb-4 px-0">
              <h3 className="w-full font-heading-6 text-blue-gray900 text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)]">
                {card.title}
              </h3>
              <p className="w-full font-body-l text-blue-gray900 text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
