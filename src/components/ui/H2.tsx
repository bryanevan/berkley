import { cn } from "@/lib/utils";

export function H2(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn("letter-spacing text-2xl tracking-tight", props.className)}
    />
  );
}
