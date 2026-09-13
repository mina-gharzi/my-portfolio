import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-text-muted",
        className
      )}
      {...props}
    />
  );
}

export { Badge };