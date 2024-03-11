import * as React from "react";

import { cn } from "@/lib/utils";

const ListCards = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-5 gap-4 2xl:gap-6 2xl:grid-cols-7",
      className
    )}
    {...props}
  />
));
ListCards.displayName = "ListCards";

export { ListCards };
