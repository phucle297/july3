import z from "zod";

export const colorsSchema = z.enum([
  "gray",
  "red",
  "rose",
  "orange",
  "green",
  "blue",
  "yellow",
  "violet",
]);

export const COLORS = Object.keys(colorsSchema.enum);

export type TColor = z.infer<typeof colorsSchema>;

export const badgeColorSchema = z.enum([
  "default",
  "secondary",
  "destructive",
  "outline",
  "yellow_pastel_1",
  "yellow_pastel_2",
  "yellow_pastel_3",
  "yellow_pastel_4",
  "yellow_pastel_5",
  "yellow_pastel_6",
  "yellow_pastel_7",
  "yellow_pastel_8",
  "yellow_pastel_9",
  "yellow_pastel_10",
  "yellow",
  "blue_pastel_1",
  "blue_pastel_2",
  "blue_pastel_3",
  "blue_pastel_4",
  "blue_pastel_5",
  "blue_pastel_6",
  "blue_pastel_7",
  "blue_pastel_8",
  "blue_pastel_9",
  "blue_pastel_10",
  "blue",
  "green_pastel_1",
  "green_pastel_2",
  "green_pastel_3",
  "green_pastel_4",
  "green_pastel_5",
  "green_pastel_6",
  "green_pastel_7",
  "green_pastel_8",
  "green_pastel_9",
  "green_pastel_10",
  "green",
  "violet_pastel_1",
  "violet_pastel_2",
  "violet_pastel_3",
  "violet_pastel_4",
  "violet_pastel_5",
  "violet_pastel_6",
  "violet_pastel_7",
  "violet_pastel_8",
  "violet_pastel_9",
  "violet_pastel_10",
  "violet",
  "red_pastel_1",
  "red_pastel_2",
  "red_pastel_3",
  "red_pastel_4",
  "red_pastel_5",
  "red_pastel_6",
  "red_pastel_7",
  "red_pastel_8",
  "red_pastel_9",
  "red_pastel_10",
  "red",
  "gray",
]);

export type TBadgeColor = z.infer<typeof badgeColorSchema>;
