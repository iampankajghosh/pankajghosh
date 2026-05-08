import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const rowVariants = cva("border-border h-full border-b", {
  variants: {
    size: {
      xs: "h-2.5",
      sm: "h-5",
      md: "h-10",
      lg: "h-15",
      xl: "h-20",
      "2xl": "h-25",
      default: "h-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = VariantProps<typeof rowVariants> & {
  children?: React.ReactNode;
  className?: string;
};

export function Row({ children, className, size }: Props) {
  return <div className={cn(rowVariants({ size }), className)}>{children}</div>;
}
