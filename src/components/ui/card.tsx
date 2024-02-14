import * as React from "react";

import { cn } from "@/lib/utils";
import { Superhero } from "@/features/dashboard/superheroAPI";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  backgroundImageUrl?: string;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, backgroundImageUrl, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 10,
      }}
      className={cn(
        "relative flex flex-col justify-end rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative z-10 p-4">{children}</div>
    </div>
  )
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const SuperheroCard = ({ hero }: { hero: Superhero }) => {
  return (
    <Card
      className="md:w-56 md:h-96 w-48 h-72 text-white rounded-lg drop-shadow-lg"
      backgroundImageUrl={hero.images.lg}
    >
      <CardHeader>
        <CardTitle>{hero.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-thin text-slate-300">
        <p>Height: {hero.appearance.height[1]}</p>
        <p>Weight: {hero.appearance.weight[1]}</p>
      </CardContent>
    </Card>
  );
};

export { Card, CardHeader, CardTitle, CardContent, SuperheroCard };
