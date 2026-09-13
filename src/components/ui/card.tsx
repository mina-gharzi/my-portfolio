import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-bg-secondary border border-border rounded-card p-6 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300",
        className
      )}
      {...props}
    />
  );
}

export { Card };