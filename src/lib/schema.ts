import { z } from "zod"

export const Categories = {
  FRAMEWORK: "FRAMEWORK",
  LIBRARY: "LIBRARY",
  DESIGN_TOOL: "DESIGN_TOOL",
  DEV_TOOL: "DEV_TOOL",
  LANGUAGE: "LANGUAGE",
  DATABASE: "DATABASE",
  TYPOGRAPHY: "TYPOGRAPHY",
  HOSTING: "HOSTING",
  DEVOPS: "DEVOPS",
  UI: "UI",
  RESOURCES: "RESOURCES",
  AI: "AI",
} as const

export const toolFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  headline: z.string().min(10, "Headline must be at least 10 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  image: z.string(),
  category: z.enum([
    "FRAMEWORK",
    "LIBRARY",
    "DESIGN_TOOL",
    "DEV_TOOL",
    "LANGUAGE",
    "DATABASE",
    "TYPOGRAPHY",
    "HOSTING",
    "DEVOPS",
    "UI",
    "RESOURCES",
    "AI",
  ]),
  isOpenSource: z.boolean(),
  isFree: z.boolean(),
  isPopular: z.boolean(),
  popularityScore: z.number().min(0).max(100),
})

export type ToolFormValues = z.infer<typeof toolFormSchema>

