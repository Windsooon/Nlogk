import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout"
import { pageTree } from "@/app/source"

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Nlogk",
  },
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
}
