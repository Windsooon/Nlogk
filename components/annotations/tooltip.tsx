import { AnnotationHandler } from "codehike/code"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export const tooltip: AnnotationHandler = {
  name: "tooltip",
  Inline: ({ children, annotation }) => {
    const { query, data } = annotation
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className="underline decoration-dashed"
            style={{ borderBottom: "1px dashed black" }} // Add border and padding
          >
            {children}
          </TooltipTrigger>
          <TooltipContent align="start">
            {data?.children || query}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
}
