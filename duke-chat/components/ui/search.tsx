import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const SearchInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex items-center border border-input rounded-md px-3 py-3">
        <Search size={13} />
        <input
          type="search"
          className={cn(
            "flex-1 bg-transparent text-[12px] placeholder:text-muted-foreground focus:outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export { SearchInput }