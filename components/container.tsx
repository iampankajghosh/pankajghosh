import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("mx-auto h-full max-w-2xl", {
  variants: {
    variant: {
      default: "",
      label: "flex items-end",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = VariantProps<typeof containerVariants> & {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className, variant }: Props) {
  return (
    <div className={cn(containerVariants({ variant }), className)}>
      {children}
    </div>
  );
}
