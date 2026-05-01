import {
  formatDuration,
  intervalToDuration,
  parse,
  type Duration,
} from "date-fns";
import { enUS } from "date-fns/locale";

export const getShortDuration = (range: string): string => {
  if (!range) return "";

  const [startStr, endStr] = range.split(" - ");

  const start = parse(startStr, "MM.yyyy", new Date());

  const end =
    endStr.toLowerCase() === "present"
      ? new Date()
      : parse(endStr, "MM.yyyy", new Date());

  const duration: Duration = intervalToDuration({ start, end });

  const shortLocale = {
    ...enUS,
    formatDistance: (token: string, count: number) => {
      const tokens: Record<string, string> = {
        xYears: `${count}Y`,
        xMonths: `${count}M`,
      };
      return tokens[token] || "";
    },
  };

  return formatDuration(duration, {
    format: ["years", "months"],
    delimiter: " ",
    locale: shortLocale,
  });
};
