import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function MainContent({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={cn("lg:ps-[360px]", className)} {...props} />;
}

export { MainContent };