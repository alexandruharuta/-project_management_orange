import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  image,
  type,
  disabled,
}: IButton) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {image}
      {children}
    </button>
  );
}
