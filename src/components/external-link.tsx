import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = ComponentPropsWithoutRef<"a">;

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
