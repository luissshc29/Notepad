import { Button } from "components/ui/button";
import React from "react";

export default function Botao({
  children,
  type,
  className,
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      type={type}
      className={`
                rounded-xl
                ${className}
            `}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
