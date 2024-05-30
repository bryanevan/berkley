import { cn } from "@/lib/utils";

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "letter-spacing text-3xl tracking-tight sm:text-4xl",
        props.className,
      )}
    />
  );
}
