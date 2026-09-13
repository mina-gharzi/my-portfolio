import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function MainContent({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={cn("pt-20 lg:pt-0 lg:ps-90", className)} {...props} />;
}
export { MainContent };